
import express from 'express';
import  agregarConductor  from '../controllers/Conductores-controller/Conductores-controller';

const conductor = express.Router();

conductor.post('/conductores', agregarConductor);

export default conductor;
