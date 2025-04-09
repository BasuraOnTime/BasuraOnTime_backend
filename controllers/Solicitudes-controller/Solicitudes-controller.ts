import { Request, Response } from "express";
import Solicitud_Servis from '../../services/Solicitudes/Solicitudes_Servis';
import Solicitud from "../../Dto/Solicitudes/Solicitud";

let registerSolicitud = async(req : Request, res: Response) =>{
    try{
        const{
            id_solicitud,
            zona,
            cantidad,
            tipo_residuo,
            tamano,
        } = req.body;
        delete req.body.id;
        const registerSolicitud = await Solicitud_Servis.registerSolicitud( new Solicitud(id_solicitud, cantidad, tipo_residuo, tamano, zona));
        return res.status(201).json(
            { status: 'register ok'}
        );
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage })
        }
    }
}

export default registerSolicitud;