const {heroes} = require("../models/hero.models");

function getHeroes (req, res) {
    res.send(heroes);
};

function getHero(req, res) {
    const tmpid = req.params.id;
    const hero = heroes.filter(({id}) => id === +tmpid);
    if (hero) {
        res.send(hero[0]);
    } else {
        res.status(400).send(`No hero with id ${tmpid}`);
    }
};

function getHeroesbyorigin(req, res) {
    const ori = req.params.origin;
    const hero = heroes.filter(({origin}) => origin === ori);
    if (hero) {
        res.send(hero);
    } else {
        res.status(400).send(`No hero from ${ori}`);
    }
};

function getHeroesbypower(req, res) {
    const pow = req.params.power;
    const hero = heroes.filter(({power}) => power < +pow);
    if (hero) {
        res.send(hero);
    } else {
        res.status(400).send(`No hero from ${ori}`);
    }
};

function postHeroes(req, res) {
    if (!req.body.name && !req.body.origin) {
        return res.status(400).send('Hero\'s name and origin are mandatory');
    }
    const newHero = {
        id: heroes[heroes.length - 1].id + 1,
        name: req.body.name,
        origin: req.body.origin,
        power: req.body.power
    }
    heroes.push(newHero);
    res.send(newHero);
};

function putHeroes(req, res) {
    if (!req.body.name && !req.body.origin) {
        return res.status(400).send('Missing hero\'s name and origin');
    }
    const tmpid = req.params.id;
    const hero = heroes.filter(({id}) => id === +tmpid);
    if (hero) {
        const idx = heroes.findIndex((obj => obj.id == tmpid));
        const newHero = {
            id: tmpid,
            name: req.body.name,
            origin: req.body.origin,
            power: req.body.power
        }
        heroes[idx] = newHero;
        res.send(newHero);
    } else {
        res.status(400).send(`No hero with id ${tmpid}`);
    }
};

function deleteHeroes (req, res) {
    const tmpid = req.params.id;
    const hero = heroes.filter(({id}) => id === +tmpid);
    if (hero) {
        const idx = heroes.findIndex((obj => obj.id == tmpid));
        heroes.splice(idx, 1);
        res.send(`Hero with id ${tmpid} is deleted`);
    } else {
        res.send(`Hero with id ${tmpid} doesn't exist`);
    }
};

module.exports = {
    getHeroes, getHero, getHeroesbyorigin, getHeroesbypower ,postHeroes, putHeroes, deleteHeroes
}
