// services/TruckService.js
import axios from 'axios';
import UsuarioRepository from '../../repositories/Usuario/UsuarioRepository2';
import dotenv from "dotenv";
dotenv.config();

export default class TruckService {
  private usuarioRepository: UsuarioRepository;

  constructor(usuarioRepository: UsuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async verificarUsuariosCercanos(truckLat: number, truckLng: number) {
    const usuarios = await this.usuarioRepository.getAllUsuarios();
    console.log(usuarios)
    const usuariosCercanos: { userId: number; distanciaKm: number }[] = [];

    for (const user of usuarios) {
      const distanciaKm = await this.calcularDistanciaGoogle(
        truckLat,
        truckLng,
        user.latitud,
        user.longitud
      );

      if (distanciaKm <= 1) {
        usuariosCercanos.push({
          userId: user.id_usuario,
          distanciaKm,
        });
      }
    }

    return usuariosCercanos;
  }

  async calcularDistanciaGoogle(
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number
  ): Promise<number> {
    console.log('🚨 Verificando:');
console.log('truckLat:', lat1);
console.log('truckLng:', lng1);
console.log('userLat:', lat2);
console.log('userLng:', lng2);

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json`;
    const response = await axios.get(url, {
      params: {
        origins: `${lat1},${lng1}`,
        destinations: `${lat2},${lng2}`,
        key: process.env.GOOGLE_MAPS_API_KEY,
        units: 'metric',
      },
    });

    const element = response.data.rows[0].elements[0];
    if (element.status !== 'OK') {
      throw new Error(`Error DistanceMatrix: ${element.status}`);
    }

    const meters = element.distance.value;
    return meters / 1000;
  }
}

