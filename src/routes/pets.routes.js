import express from "express";
import { createPets, listOnePet, listPets, petsAvailable } from "../controllers/pets.controllers.js";
const petsRoutes = express.Router()

petsRoutes.get('/pets', listPets);
petsRoutes.get('/pets/listOne/:nome', listOnePet);
petsRoutes.get('/pets/listAvailable', petsAvailable);
petsRoutes.post('/pets', createPets);

export { petsRoutes }