# Proyecto Node JWT TS

Una API RESTful desarrollada con Node.js, TypeScript, Express y Prisma que implementa autenticación basada en JWT y un sistema de gestión de usuarios con PostgreSQL.

## 🚀 Características

- **Autenticación JWT** - Registro e inicio de sesión con tokens firmados
- **Encriptación de contraseñas** - Uso de bcrypt para hash seguro
- **Base de datos PostgreSQL** - Integración mediante Prisma ORM
- **API externa de anime** - Consumo de API pública con rutas protegidas
- **TypeScript** - Tipado estático para mayor seguridad
- **ES Modules** - Soporte nativo para módulos ESM

## 📁 Estructura del proyecto

```
src/
├── app.ts                    # Configuración principal de Express
├── server.ts                 # Punto de entrada del servidor
├── controllers/
│   ├── authController.ts     # Lógica de registro y login
│   └── anime.controllers.ts    # Consumo de API externa de anime
├── services/
│   ├── auth.service.ts       # Generación de tokens JWT
│   └── password.service.ts     # Encriptación y comparación de passwords
├── models/
│   ├── user.ts               # Cliente Prisma configurado
│   ├── userInterface.ts      # Interfaz del usuario
│   └── jwtInterface.ts       # Interfaz del payload JWT
├── routes/
│   ├── auth.routes.ts         # Rutas públicas de autenticación
│   └── anime.routes.ts       # Rutas protegidas de anime
└── generated/
    └── prisma/               # Cliente Prisma generado
```

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd proyecto_node_jwt_ts

# Instalar dependencias
npm install
```

## ⚙️ Configuración

Crear un archivo `.env` con las siguientes variables:

```env
DATABASE_URL=postgresql://usuario:password@localhost:5432/tu_base_de_datos
JWT_SECRET=tu_secreto_jwt_aqui
PORT=3000
```

## 🔧 Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor en modo desarrollo con recarga automática |
| `npm run build` | Compila el proyecto TypeScript a JavaScript |
| `npm run start` | Ejecuta el servidor compilado desde `dist/` |

## 📡 Endpoints

### Autenticación

- `POST /auth/register` - Registrar nuevo usuario
  ```json
  {
    "email": "usuario@example.com",
    "password": "contraseña123"
  }
  ```

- `POST /auth/login` - Iniciar sesión
  ```json
  {
    "email": "usuario@example.com",
    "password": "contraseña123"
  }
  ```

### Anime (requiere token JWT)

- `GET /anime/` - Obtener todos los personajes
- `GET /anime/:animeName` - Buscar por nombre de anime
- `GET /anime/charname/:characterName` - Buscar por nombre de personaje

**Header requerido:**
```
Authorization: Bearer <token_jwt>
```

## 🛠️ Tecnologías

- [Node.js](https://nodejs.org/) - Entorno de ejecución
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Express](https://expressjs.com/) - Framework web
- [Prisma](https://www.prisma.io/) - ORM para PostgreSQL
- [JWT](https://jwt.io/) - Autenticación basada en tokens
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) - Encriptación de contraseñas

## 📄 Licencia

ISC - W4k4ndA