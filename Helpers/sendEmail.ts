import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const sendRecoveryEmail = async (to: string, link: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Tu correo (desde el .env)
      pass: process.env.EMAIL_PASS, // Contraseña de aplicación (NO la normal)
    },
  });

  const mailOptions = {
    from: `"BasuraOnTime 🚛" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Recuperación de contraseña',
    html: `
      <p>Hola,</p>
      <p>Haz clic en el siguiente enlace para restablecer tu contraseña. Este enlace es válido por 15 minutos:</p>
      <a href="${link}">${link}</a>
      <p>Si no solicitaste esto, ignora este mensaje.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
