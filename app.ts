import express from "express";
import bodyParser from 'body-parser';

import register from './routes/register';
import auth from './routes/auth';
import profile from './routes/profile';
import estado_camion from './routes/estado_camion';
import solicitudes from './routes/solicitudes';
import authAdmin from './routes/authAdmin';
import startAdmin from './routes/startAdmin';
import deleteUser from './routes/deleteUser';
import editUser from './routes/editUser';
import dotenv from "dotenv";
import password from './routes/password';
import resetPasswordRoute from './routes/reset-password';

dotenv.config(); 

const app = express().use(bodyParser.json());
// rutas usuario
app.use('/register', register);
app.use('/auth', auth);
app.use('/profile', profile);
app.use('/start', estado_camion);
app.use('/requests', solicitudes);
app.use('/deleteUser', deleteUser);
app.use('/editUser', editUser);
app.use('/api', password);
app.use('/apiReset', resetPasswordRoute);
// rutas admin
app.use('/authAdmin', authAdmin);
app.use('/startAdmin', startAdmin); 
app.use('/settingsTruck', estado_camion);


const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});

