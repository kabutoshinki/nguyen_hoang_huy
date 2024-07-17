# CRUD Server with ExpressJS and TypeScript

## Overview

This project is a simple backend server built with ExpressJS and TypeScript. It provides a set of CRUD (Create, Read, Update, Delete) operations to interact with a resource. The server is connected to a simple database using Prisma for data persistence.

## Features

- Create a resource
- List resources with basic filters
- Get details of a resource
- Update resource details
- Delete a resource

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- npm or yarn package manager installed
- A running instance of a database PostgreSQL
- Docker and Docker Compose installed (for Docker setup)

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/kabutoshinki/nguyen_hoang_huy
   cd problem_5
   cd crud-server
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Configure the database
   Create a `.env` file in the root directory and add your database configuration:
   ```plaintext
   DATABASE_URL="postgresql://postgres:admin@localhost:5432/mydb?schema=public"
   DATABASE_URL_DOCKER="postgresql://postgres:admin@postgres_db:5432/mydb?schema=public"
   PORT=8080
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=admin
   POSTGRES_DB=mydb
   ```
4. Run database migrations and seed data (if applicable)
   ```bash
   npm run build
   npx prisma migrate deploy
   npm run seed
   ```

## Running the Application

1. Start the server

   ```bash
   npm start
   # or
   yarn start
   ```

2. The server will start on `http://localhost:${PORT}` config on .env file

## Docker Setup (if have)

- Build and start the Docker containers

```bash
 docker-compose up --build
```

## API Endpoints

### Create a Resource

- **URL**: `api/resources`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "string",
    "value": "string"
  }
  ```
- **Response**:
  ```json
  {
    "id": "number",
    "name": "string",
    "value": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```

### List Resources with Basic Filters

- **URL**: `api/resources`
- **Method**: `GET`
- **Query Parameters**:
  - `name` (optional): Filter by name
  - `value` (optional): Filter by value
- **Response**:
  ```json
  [
    {
      "id": "number",
      "name": "string",
      "value": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
  ```

### Get Details of a Resource

- **URL**: `api/resources/:id`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "id": "number",
    "name": "string",
    "value": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```

### Update Resource Details

- **URL**: `api/resources/:id`
- **Method**: `PUT`
- **Body**:
  ```json
  {
    "name": "string",
    "value": "string"
  }
  ```
- **Response**:
  ```json
  {
    "id": "number",
    "name": "string",
    "value": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```

### Delete a Resource

- **URL**: `api/resources/:id`
- **Method**: `DELETE`
- **Response**:
  ```json
  {
    "message": "Resource deleted successfully"
  }
  ```

## Development

To run the server in development mode:

```bash
npm run dev
```
