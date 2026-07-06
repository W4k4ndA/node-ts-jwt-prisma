// Rutas de autenticación
// Define endpoints públicos para registro y login de usuarios
import express from 'express';
import { register, login } from '../controllers/auth.controller.ts';

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

export default router;