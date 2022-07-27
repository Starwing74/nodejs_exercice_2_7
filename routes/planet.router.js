const express = require('express');
const planetController = require('../controller/planet.controller')
const planetRouter = express.Router();

planetRouter.get('/', planetController.getPlanets);
planetRouter.get('/:id', planetController.getPlanet);
planetRouter.get('/color/:color', planetController.getPlanetsbycolor);
planetRouter.get('/', planetController.postPlanet);
planetRouter.get('/:id', planetController.putPlanet);
planetRouter.get('/:id', planetController.deletePlanet);

module.exports = planetRouter;