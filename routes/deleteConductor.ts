import { Router } from 'express';
import eliminarConductor from '../controllers/Conductores-controller/deletDriver-controller';

const elminarConductor = Router();
elminarConductor.delete('/eliminar', eliminarConductor); // usando id_conductor en el body

export default elminarConductor;
