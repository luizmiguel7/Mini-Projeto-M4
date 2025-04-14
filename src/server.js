import express from 'express';
import { petsRoutes } from './routes/pets.routes.js';
import { tryConnectSequelize } from './database/db.js';
import corsMiddleware from './middlewares/corsMiddlewares.js';
const port = process.env.PORT || 4000;
const server = express();

server.use(express.json());
server.use(corsMiddleware)
server.use(petsRoutes)

server.listen(port, () => {
    tryConnectSequelize()
    console.log(`Servidor rodando na porta http://localhost:${port}`);

});