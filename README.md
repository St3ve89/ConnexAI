# ConnexAI Project

A full-stack application with a backend API using Express and Prometheus, and a frontend client built with React and TypeScript.

## Project Structure

connexai/
├── client/ # React frontend
├── server/ # Express backend
└── README.md # Documentation

## Requirements

- Node.js (>= 14)
- npm (or yarn)

## Setup Instructions

1. Clone the repository:
   git clone https://github.com/St3ve89/ConnexAI.git
   cd connexai

2. Install dependencies:
   - Backend:
     cd server
     npm install
   - Frontend:
     cd ../client
     npm install

## Running the Project

1. Start Backend:
   cd server
   npm run dev
   Runs on http://localhost:3001.

2. Start Frontend:
   cd ../client
   npm start
   Runs on http://localhost:3000.

### Environment Variables

Create `.env` in client:

```bash
REACT_APP_SERVER_URL=http://localhost:3001
REACT_APP_AUTH_TOKEN=mysecrettoken
```

Note: No server `.env` is needed; refer to the chat for details.

## API Endpoints

- GET /time: Returns server time (requires Authorization: Bearer mysecrettoken).
- GET /metrics: Returns Prometheus metrics (requires Authorization: Bearer mysecrettoken).

Example:

```bash
curl -H "Authorization: Bearer mysecrettoken" http://localhost:3001/time
```

## Linting

- Linting:
  - Client: `cd client && npm run lint`
  - Server: `cd server && npm run lint`
