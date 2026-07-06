// Controlador de autenticación
// Maneja el registro e inicio de sesión de usuarios con JWT
import type { Request, Response } from "express";
import { comparePassword, hashPassword } from '../services/password.service.ts'
import prisma from '../models/user.ts'
import { generateToken } from "../services/auth.service.ts";

// Registra un nuevo usuario en la base de datos
// Valida email y password, hash la contraseña y genera token JWT
export const register = async (req: Request, res: Response): Promise<void> => {

    const { email, password } = req.body;

    try {

        if (!email) {
            res.status(400).json({ message: "El email es requerido" });
            return;
        }

        else if (!password) {
            res.status(400).json({ message: "El password es requerido" });
            return;
        }

        const hashedPassword = await hashPassword(password);
        console.log(hashedPassword);

        const user = await prisma.create({
            data: {
                email,
                password: hashedPassword
            }
        })

        const token = generateToken(user);
        res.status(201).json({ token });

    } catch (error) {

        if (error instanceof Error && error.message.includes("Unique constraint failed")) {
            res.status(409).json({ message: "El email ya está registrado" });
        }
        else {
            res.status(500).json({ message: "Hubo un error en el servidor" });
        }

    }
}

// Autentica un usuario existente
// Verifica credenciales y devuelve token JWT si son válidas
export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        const correo = email;
        const user = await prisma.findUnique({ where: { email: correo } });

        if (!user) {
            res.status(404).json({ message: "Usuario o clave incorrectos" });
            return;
        }


        const passwrodMatch = await comparePassword(password, user.password);

        if (!passwrodMatch) {
            res.status(401).json({ message: "Usuario o clave incorrectos" });
            return;
        }

        const token = generateToken(user);
        res.status(200).json({ token });
        return;

    } catch (error) {
        res.status(500).json({ message: "Hubo un error en el servidor" });
    }
}