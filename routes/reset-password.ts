// routes/reset-password.ts
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import db from '../config/config-db';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/reset-password', async (req, res) => {
  const { token, nuevaPassword } = req.body;

  if (!token || !nuevaPassword) {
    return res.status(400).json({ mensaje: 'Faltan datos' });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
    const email = decoded.email;

    // Encriptar nueva contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(nuevaPassword, salt);

    // Actualizar en la base de datos
    const sql = `UPDATE users SET password = ? WHERE email = ?`;
    await db.execute(sql, [hashedPassword, email]);

    return res.status(200).json({ mensaje: 'Contraseña actualizada correctamente' });
  } catch (error) {
    return res.status(401).json({ mensaje: 'Token inválido o expirado' });
  }
});

export default router;
