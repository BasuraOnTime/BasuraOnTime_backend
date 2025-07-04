import { Request, Response } from 'express';
import ConductorServices from '../../services/Conductor/ConductorServices';
import Conductor from '../../Dto/Conductores/Conductor';

export const agregarConductor = async (req: Request, res: Response) => {
  try {
    delete req.body.id;
    delete req.body.rol;
    const { id_rol , email, nombres, apellidos, telefono, password ,tipo_licencia, fecha_vencimiento_licencia, fk_id_camion } = req.body;

    if (!id_rol || !email || !nombres || !apellidos || !telefono || !password || !tipo_licencia || !fecha_vencimiento_licencia || !fk_id_camion) {
      return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }

    // ✅ Crear instancia del DTO
    const conductor = new Conductor(
      id_rol,
      email,
      nombres,
      apellidos,
      telefono,
      password,
      tipo_licencia,
      fecha_vencimiento_licencia,
      fk_id_camion,
    );

    await ConductorServices.registerConductor(conductor);

    res.status(201).json({ mensaje: 'Conductor agregado correctamente' });
  } catch (error) {
    console.error('Error al agregar conductor:', error);
    res.status(500).json({ mensaje: 'Error al insertar el conductor' });
  }
};

export default agregarConductor