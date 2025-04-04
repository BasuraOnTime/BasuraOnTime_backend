import express from "express";
import authController from '../controllers/Usuario-controller/auth-controller';
const router = express.Router();


router.post('/', authController);


export default router;
