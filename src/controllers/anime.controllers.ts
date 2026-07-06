// Controlador de API externa de anime
// Consume servicios REST para obtener información de personajes
import type { Request, Response } from "express";

const animeApi = "https://anime-api.canelacho.com/api/v1/characters/";

// Obtiene todos los personajes de anime de la API externa
export const getAllCharacters = async (req: Request, res: Response): Promise<void> => {

    try {
        
        const response = await fetch(animeApi);
        const characters = await response.json();
        res.status(200).json(characters);
        console.log("solicitud completada exitosamente");
        return;

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener los caracteres" });
    }
}

// Busca personajes por nombre de anime
export const getCharacterByAnimeName = async (req: Request, res: Response): Promise<void> => {

    const anime = req.params.animeName;

    try {
        
        const url = `${animeApi}search?anime=${anime}`
        const response = await fetch(url);
        const animes = await response.json();

        if(!animes.data || animes.data.length === 0){
            res.status(404).json({ message: "Anime no encontrado" });
            return;
        }

        res.status(200).json(animes);
        console.log("solicitud completada exitosamente");
        return;

    } catch (error) {

        console.error(error);
        res.status(500).json({ message: "Error al obtener los caracteres" });
    }
}

// Busca un personaje específico por su nombre
export const getCharacterByName = async (req: Request, res: Response): Promise<void> => {

    const char = req.params.characterName;

    try {
        
        const url = `${animeApi}search?name=${char}`
        const response = await fetch(url);
        const animes = await response.json();

        if(!animes.data || animes.data.length === 0){
            res.status(404).json({ message: "Anime no encontrado" });
            return;
        }

        res.status(200).json(animes);
        console.log("solicitud completada exitosamente");
        return;

    } catch (error) {

        console.error(error);
        res.status(500).json({ message: "Error al obtener los caracteres" });
    }
}