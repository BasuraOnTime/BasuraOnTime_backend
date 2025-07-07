import { Request, Response } from 'express';
import Conductor from '../../Dto/Conductores/Conductores';
import ConductorRepository from '../../repositories/Conductores/ConductoresRepository';
import  generarContrasenaAleatoria  from '../../Helpers/utils/generarContrasena';
import  enviarCorreo  from '../../Helpers/utils/nodemailer';
import bcrypt from 'bcryptjs';

export const agregarConductor = async (req: Request, res: Response) => {
  try {
    const { nombres, apellidos, telefono, tipo_licencia, fecha_vencimiento_licencia, email } = req.body;

    const password = generarContrasenaAleatoria();
    const contrasenaHash = await bcrypt.hash(password, 10);

    const conductor = new Conductor(
      nombres,
      apellidos,
      telefono,
      tipo_licencia,
      fecha_vencimiento_licencia,
      contrasenaHash,
      email
    );

    await ConductorRepository.add(conductor);
    await enviarCorreo(email, password);

    res.status(201).json({ mensaje: 'Conductor agregado y correo enviado' });
  } catch (error) {
  console.error('Error al registrar conductor:', error);
  res.status(500).json({ mensaje: 'Error al registrar el conductor', error: error instanceof Error ? error.message : error });
}

  
};


export default agregarConductor