const express = require('express');
const planetController = require('../controller/hero.controller')
const planetRouter = express.Router();

planetRouter.get('/', planetController.getHeroes);
planetRouter.get('/:id', planetController.getHero);
planetRouter.get('/origin/:origin', planetController.getHeroesbyorigin);
planetRouter.get('/power/:power', planetController.getHeroesbypower);
planetRouter.get('/', planetController.putHeroes);
planetRouter.get('/:id', planetController.postHeroes);
planetRouter.get('/:id', planetController.deleteHeroes);

module.exports = planetRouter;