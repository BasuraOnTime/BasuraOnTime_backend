import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { sendRecoveryEmail } from '../../Helpers/sendEmail';

// Cargar variables de entorno
dotenv.config();

export const recuperarContraseña = async (req: Request, res: Response) => {
  const { email } = req.body;

  // Aquí debes buscar el usuario en la base de datos (ejemplo simulado)
  const usuarioExiste = true; // Reemplaza por tu consulta a la DB

  if (!usuarioExiste) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }

  // Generar token de recuperación
  const token = jwt.sign({ email }, process.env.JWT_SECRET as string, {
    expiresIn: '15m',
  });

  const link = `http://localhost:10101/reset-password?token=${token}`;

  // Enviar email con el enlace
  await sendRecoveryEmail(email, link);

  res.json({ mensaje: 'Se envió un enlace de recuperación al correo' });
};
