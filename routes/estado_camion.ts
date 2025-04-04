import express from 'express';
import verifyToken from '../middleware/VerifyToken';
import CamionController from '../controllers/Camion-controller/Estado_Camion';
const router = express.Router();

router.get('/', verifyToken, CamionController)

export default router;