import { Request, Response } from "express";
import CamionService from "../../services/Camion/CamionServices";

let configCamionAdmin = async (req: Request, res: Response) => {
  try {
    const camion = await CamionService.configCamionAdmin();
    return res.status(200).json({
      data: camion,
    });
  } catch (error) {
    console.log(error);
  }
};

export default configCamionAdmin;
