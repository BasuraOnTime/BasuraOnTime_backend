import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();


interface JwtPayload {
    data: {id: number, id_rol: number},
    exp: number,
    iat: number
}


const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    let authorization = req.get('Authorization');    
    if (authorization) {
        const token = authorization.split(' ')[1]        
        if (!token) {
            return res.status(401).json(
                { status: 'you have not sent a token' }
            );
        };
        try {
            let decoded = jwt.verify(token, process.env.KEY_TOKEN as string) as JwtPayload;            
            req.body.id = decoded.data.id;
            req.body.id_rol = decoded.data.id_rol;

            console.log(`User ID: ${req.body.id}, Role: ${req.body.id_rol}`);

            return next()
        } catch (error) {
            return res.status(403).json(
                { status: 'Unauthorized' }
            );
        }
    }
    return res.status(403).json(
        { status: "The Authorization header is required"}
    );
}


export default verifyToken;