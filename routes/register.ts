import express from "express";
import registerController from '../controllers/Usuario-controller/register-controller';
const router = express.Router();


router.post('/', registerController);


export default router;