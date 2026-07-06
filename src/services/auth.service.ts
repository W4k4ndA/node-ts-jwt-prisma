// Servicio de generación de tokens JWT
// Crea tokens firmados con el secreto de la aplicación
import jwt from 'jsonwebtoken';
import type { User } from '../models/userInterface.ts';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Genera un token JWT con los datos del usuario
export const generateToken = (user: User): string => {
    return jwt.sign({ id: user.id, email:user.email }, JWT_SECRET, { expiresIn: '1h' });
}