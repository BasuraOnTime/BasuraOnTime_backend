import express from "express";
import AdministradorController from '../controllers/Administrador-controller/Administrador';
const router = express.Router();


router.post('/', registerController);


export default router;