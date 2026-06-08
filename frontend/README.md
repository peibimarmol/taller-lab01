# FlowOps – Frontend

Aplicación web React que implementa autenticación JWT contra el backend FastAPI del proyecto.

## Características

- **Página de Login** – formulario con usuario y contraseña que consume `POST /auth/login` del backend. El token de acceso se guarda en `sessionStorage` (se elimina al cerrar la pestaña/navegador).
- **Página de Bienvenida** – ruta protegida que muestra información de la sesión activa. Solo es accesible si el usuario ha iniciado sesión.
- **Protección de rutas** – cualquier ruta no autenticada redirige automáticamente a `/login`.
- **Diseño** – implementa el sistema de diseño definido en `DESIGN.md` (FlowOps Surgical Precision): tipografía Inter, paleta de colores definida, superficies de vidrio (glass), sombras, esquinas redondeadas y animaciones según especificación.

## Stack

| Herramienta | Versión |
|-------------|---------|
| React | 19 |
| Vite | 6 |
| React Router DOM | 7 |

## Requisitos previos

| Herramienta | Versión |
|-------------|---------|
| Node.js | ≥ 18 |
| npm | ≥ 9 |
| Backend FlowOps | corriendo en `http://localhost:8000` |

## Configuración e instalación

```bash
# Desde la raíz del repositorio
cd frontend

# Instalar dependencias
npm install
```

## Ejecución en desarrollo

> El servidor de desarrollo usa un proxy configurado en `vite.config.js` para reenviar las peticiones `/auth/*` al backend en `http://localhost:8000`. Asegúrate de que el backend esté en ejecución antes de iniciar el frontend.

```bash
# 1. Iniciar el backend (en otra terminal, desde backend/)
poetry run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# 2. Iniciar el frontend
cd frontend
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

## Compilación para producción

```bash
npm run build
```

Los artefactos se generan en `frontend/dist/`. Para servir la aplicación compilada apuntando al backend:

```bash
npm run preview
```

> En un entorno de producción, configura la variable de entorno `VITE_API_BASE_URL` o ajusta el proxy de tu servidor web (nginx, Caddy, etc.) para reenviar `/auth` al backend.

## Credenciales de prueba

Las credenciales por defecto del backend son:

| Campo      | Valor      |
|------------|------------|
| Usuario    | `admin`    |
| Contraseña | `admin123` |

## Estructura del proyecto

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   └── ProtectedRoute.jsx   # HOC que redirige a /login si no hay sesión
│   ├── context/
│   │   └── AuthContext.jsx      # Context + hook para gestión de autenticación
│   ├── pages/
│   │   ├── LoginPage.jsx        # Página de inicio de sesión
│   │   ├── LoginPage.module.css
│   │   ├── WelcomePage.jsx      # Página de bienvenida (protegida)
│   │   └── WelcomePage.module.css
│   ├── App.jsx                  # Router principal
│   ├── App.css
│   ├── index.css                # Variables de diseño globales
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js               # Proxy hacia el backend
└── README.md
```

## Flujo de autenticación

```
Usuario ingresa credenciales
        │
        ▼
POST /auth/login (backend)
        │
   ┌────┴────┐
   │ 200 OK  │ → guarda access_token en sessionStorage → redirige a /welcome
   └────┬────┘
        │
   401 / error → muestra mensaje de error en la pantalla
```

## Linting

```bash
npm run lint
```
