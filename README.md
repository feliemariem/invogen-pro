# InvoGenPro by FNR Core

AI-powered work order management and invoicing platform.

> **Note:** This is the active development repository, not a prototype.

## Overview

InvoGenPro is a comprehensive invoicing solution designed for field service management. It combines work order tracking with automated cost calculations, streamlining the invoice generation process.

## Tech Stack

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Express.js
- **Database:** PostgreSQL

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/invogen-pro.git
   cd invogen-pro
   ```

2. Install dependencies:
   ```bash
   npm run install:all
   ```

3. Set up the database:
   ```bash
   createdb invogen_pro
   cd backend && npm run seed
   ```

4. Configure environment:
   ```bash
   cp backend/.env.example backend/.env
   # Edit .env with your database credentials
   ```

5. Start development servers:
   ```bash
   npm run dev
   ```

   This starts both frontend (port 5173) and backend (port 3001) concurrently.

## Project Structure

```
invogen-pro/
├── frontend/          # React + Vite frontend
│   └── src/
│       └── components/
├── backend/           # Express API server
│   ├── server.js
│   ├── db.js
│   └── seed.js
└── package.json       # Root package with concurrent scripts
```

## API Endpoints

- `GET /api/clients` - List all clients
- `GET /api/technicians` - List all technicians with rates
- `GET /api/pricing` - Get pricing configuration

## License

Proprietary - FNR Core
