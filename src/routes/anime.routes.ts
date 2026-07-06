// Rutas protegidas de la API de anime
// Requiere autenticación JWT para acceder a los recursos
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import { register, login } from '../controllers/authController.ts';
import jwt from 'jsonwebtoken';
import { getAllCharacters, getCharacterByAnimeName, getCharacterByName } from '../controllers/anime.controllers.ts'

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "my-secret";

const router = express.Router();

//middleware para verficar si estamos autenticados
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader?.split(" ")[1];
    if (!token) {
        res.status(401).json({ message: "No autorizado" });
        return;
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(403).json({ message: "Token inválido" });
            return;
        }

        // (req as any).user = decoded;
        next();
    });
};

router.post('/', authenticateToken, async () => { });
router.get('/', authenticateToken, getAllCharacters);
router.get('/:animeName', authenticateToken, getCharacterByAnimeName);
router.get('/charname/:characterName', authenticateToken, getCharacterByName);

export default router;