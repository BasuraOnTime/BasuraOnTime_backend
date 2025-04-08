import { Request, Response } from "express";
import UserAdminService from "../../services/Administrador/Administrador";

let administrador = async (req: Request, res: Response) => {
  try {
    const estadoCamion = await UserAdminService;
    return res.status(200).json({
      status: estadoCamion[0]
    });
  } catch (error) {
    console.log(error);
  }
}

export default administrador;