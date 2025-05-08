import express from "express";
import bodyParser from 'body-parser';

import register from './routes/register';
import auth from './routes/auth';
import profile from './routes/profile';
import estado_camion from './routes/estado_camion';
import solicitudes from './routes/solicitudes';
import authAdmin from './routes/authAdmin';
import startAdmin from './routes/startAdmin';
import configCamionAdmin from './routes/configCamionAdmin'
import configRutasAdmin from "./controllers/Ruta-controller/ConfigRutasAdminController";
import addCamionAdmin from './routes/addCamionAdmin';
import modificarCamionAdmin from './routes/modificarCamionAdmin';
import deleteCamionAdmin from './routes/deleteCamionAdmin';

import dotenv from "dotenv";
dotenv.config();

const app = express().use(bodyParser.json());
// rutas usuario
app.use('/register', register);
app.use('/auth', auth);
app.use('/profile', profile);
app.use('/start', estado_camion);
app.use('/requests', solicitudes);
// rutas admin
app.use('/authAdmin', authAdmin);
app.use('/startAdmin', startAdmin); 
app.use('/settingsTruck', configCamionAdmin);
//app.use('/settingsRoutes', configRutasAdmin); 
app.use('/addTruck', addCamionAdmin);
app.use('/modifyTruck', modificarCamionAdmin);
app.use('/deleteTruck', deleteCamionAdmin);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
