import { Router } from 'express';
import editarConductor from '../controllers/Conductores-controller/editDriver-controller';

const editconductor = Router();
editconductor.put('/editar', editarConductor); // usando id_conductor en el body

export default editconductor;
