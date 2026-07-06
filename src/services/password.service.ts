// Servicio de encriptación de contraseñas
// Utiliza bcrypt para hash y comparación de passwords
import bcrypt from 'bcrypt';

const SALT_ROUNDS: number = 10;

// Encripta una contraseña en texto plano usando bcrypt
export const hashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, SALT_ROUNDS);
};


// Verifica si una contraseña coincide con su hash
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword);
};

//TODO Leer y comparar con la base de datos