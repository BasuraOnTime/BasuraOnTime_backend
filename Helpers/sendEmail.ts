import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const sendRecoveryEmail = async (to: string, link: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Tu correo
      pass: process.env.EMAIL_PASS, // Contraseña o app password
    },
  });

  await transporter.sendMail({
    from: `"Soporte" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Recuperación de contraseña',
    html: `<p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p><a href="${link}">${link}</a>`,
  });
};
