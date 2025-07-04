// controllers/TruckController.js
import { Server } from "socket.io";
import TruckService from "./../../services/Conductor/TruckService";
import {Request, Response} from "express"
export default class TruckController {

  private truckService: TruckService;
  private io: Server;
  private userSockets: Map<string, string>;
  private lastTruckLocation: { lat: number; lng: number; timestamp: Date } | null;

  constructor(truckService: TruckService, io: Server, userSockets: Map<string, string>) {
    this.truckService = truckService;
    this.io = io;
    this.userSockets = userSockets;

    this.lastTruckLocation = null;

    this.updateTruckLocation = this.updateTruckLocation.bind(this);
    this.getTruckLocation = this.getTruckLocation.bind(this);
  }


  async updateTruckLocation(req: Request , res: Response) {
    const { lat, lng } = req.body;

    if (!lat || !lng) {
      return res.status(400).json({ error: 'Faltan coordenadas lat/lng' });
    }

    this.lastTruckLocation = { lat, lng, timestamp: new Date() };

    const usuariosCercanos =
      await this.truckService.verificarUsuariosCercanos(lat, lng);

    usuariosCercanos.forEach((u) => {
      const socketId = this.userSockets.get(u.userId.toString());
      if (socketId) {
        this.io.to(socketId).emit('truck_nearby', {
          message: `🚛 El camión está a ${u.distanciaKm.toFixed(2)} km.`,
          truckLocation: { lat, lng },
        });
      }
    });

    return res.json({
      status: 'Ubicación procesada',
      notificados: usuariosCercanos.map((u) => u.userId),
    });
  }

  async getTruckLocation(req: Request, res: Response) {
    if (!this.lastTruckLocation) {
      return res.status(404).json({ error: 'No hay ubicación aún.' });
    }

    return res.json(this.lastTruckLocation);
  }
}
