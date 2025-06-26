import { Router } from 'express';
import { agregarConductor } from '../controllers/Conductores-controller/Conductores-controller'; 

const conductores = Router();

conductores.post('/conductores', agregarConductor);

export default conductores;
