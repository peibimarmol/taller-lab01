# JWT Auth Service – Backend

A FastAPI web application implementing JWT (JSON Web Token) authentication.

## Features

- **POST /auth/login** – Authenticate with username and password; returns an access token (valid 300 seconds) and a refresh token.
- **POST /auth/refresh** – Exchange a valid refresh token for a new access/refresh token pair.
- **GET /health** – Health-check endpoint.

Built with **FastAPI**, **python-jose**, **passlib**, and managed via **Poetry**.

---

## Prerequisites

| Tool | Version |
|------|---------|
| Python | ≥ 3.11 |
| Poetry | ≥ 1.8 |
| Docker + Docker Compose | any recent version |

---

## Running locally with Poetry

```bash
# Install dependencies
cd backend
poetry install

# Start the development server
poetry run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`.  
Interactive docs: `http://localhost:8000/docs`

---

## Running with Docker Compose

```bash
cd backend
docker compose up --build
```

The API will be available at `http://localhost:8000`.

---

## API Usage

### Login

```bash
curl -X POST http://localhost:8000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'
```

**Response:**

```json
{
  "access_token": "<jwt-access-token>",
  "refresh_token": "<jwt-refresh-token>",
  "token_type": "bearer",
  "expires_in": 300
}
```

### Refresh token

```bash
curl -X POST http://localhost:8000/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{"refresh_token": "<jwt-refresh-token>"}'
```

**Response:** same structure as login.

---

## Running tests

```bash
cd backend
poetry install
poetry run pytest app/tests/ -v
```

---

## Project structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── auth.py        # JWT logic and user authentication
│   ├── main.py        # FastAPI application and route definitions
│   ├── models.py      # Pydantic request/response models
│   └── tests/
│       └── test_auth.py
├── Dockerfile
├── docker-compose.yml
├── pyproject.toml
└── README.md
```

---

## Default credentials

| Field    | Value      |
|----------|------------|
| username | `admin`    |
| password | `admin123` |

> **Note:** In a production environment, set the `SECRET_KEY` environment variable to a strong random secret (e.g. `openssl rand -hex 32`) and store user credentials in a secure database.
