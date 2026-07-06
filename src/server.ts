// Punto de entrada del servidor
// Configura y arranca el servidor Express en el puerto definido
import app from './app.ts';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});