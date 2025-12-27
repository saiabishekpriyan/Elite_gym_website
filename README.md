# Elite Fitness Hub

This project is separated into two parts:

- **client**: React Frontend (Vite)
- **server**: Node/Express Backend

## How to Run

### 1. Start Client (Frontend)
Open a terminal and run:
```bash
cd client
npm run dev
```
The frontend will run on http://localhost:5173

### 2. Start Server (Backend)
Open a **new** terminal and run:
```bash
cd server
npm run dev
```
(Make sure to add `"dev": "nodemon index.js"` to server/package.json if not already there, otherwise use `node index.js`)
The backend will run on http://localhost:5000
