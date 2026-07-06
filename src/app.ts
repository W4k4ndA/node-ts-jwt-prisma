// Configuración principal de la aplicación Express
// Inicializa el servidor y registra todos los routers disponibles
import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './routes/auth.routes.ts';
import animeRouthes from "./routes/anime.routes.ts";

dotenv.config();

const app = express();

app.use(express.json());

// Routes
//ruta de logeo y autenticacion
app.use('/auth', authRoutes)

//ruta de caso de uso: anime api
app.use("/anime", animeRouthes);

export default app;