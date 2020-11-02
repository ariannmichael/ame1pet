var express = require('express');
var petsRouter = express.Router();
var petsController = require("../public/javascripts/controllers/pets.controller");

petsRouter.get("/pets", petsController.getAllPets);
petsRouter.post("/pets", petsController.postPet);
petsRouter.get("/pets/:id", petsController.getPetById);

module.exports =  petsRouter;