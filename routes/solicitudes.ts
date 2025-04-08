import express from "express";
const router = express.Router();
import verifyToken from "../middleware/VerifyToken";
import solicitudesController  from "../controllers/Solicitudes-controller/Solicitudes-controller";

router.post('/', verifyToken, solicitudesController)

export default router;
