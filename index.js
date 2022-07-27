const {planets} = require ('./data');
const {heroes} = require ('./data');
const express = require('express');
const cors = require('cors');
const planetRouter = require('../2-express/routes/planet.router')
const heroRouter = require('../2-express/routes/hero.router')
const path = require('path')
const app = express();
const PORT = 4000;

app.use(cors({
    origin: "*"
}))

app.use(express.json());

app.use((res, req, next) => {
    const datenow = Date.now();
    next();
    const dateafer = Date.now();
    const delta = dateafer - datenow;
    console.log(`Response time ${delta}ms`);
})

app.get('/', (req, res) => {
    res.send('Welcome to my web server');
}); 
app.get('/messages', (req, res) => {
    res.send('<h1>Messages</h1><ul><li>Hello 1</li><li>Hello 2</li></ul>');
});

app.use('/planets', planetRouter);
/*app.get('/planets', (req, res) => {
    res.send(planets);
});
app.get('/planets/:id', (req, res) => {
    const tmpid = req.params.id;
    const planet = planets.filter(({id}) => id === +tmpid);
    if (planet) {
        res.send(planet[0]);
    } else {
        res.status(400).send(`No planet with id ${id}`);
    }
});
app.get('/planets/color/:color', (req, res) => {
    const tmpcolor = req.params.color;
    const planet = planets.filter(({color}) => color === tmpcolor);
    if (planet) {
        res.send(planet);
    } else {
        res.status(400).send(`No planet with color ${tmpcolor}`);
    }
});
app.post('/planets', (req, res) => {
    if (!req.body.name) {
        return res.status(400).send('Missing planet\'s name');
    }
    const newPlanet = {
        id: planets[planets.length - 1].id + 1,
        name: req.body.name,
        color: req.body.color
    }
    planets.push(newPlanet);
    res.send(newPlanet);
});
app.put('/planets/:id', (req, res) => {
    if (!req.body.name) {
        return res.status(400).send('Missing planet\'s name');
    }
    const tmpid = req.params.id;
    const planet = planets.filter(({id}) => id === tmpid);
    if (planet) {
        const idx = planets.findIndex((obj => obj.id == tmpid));
        const newPlanet = {
            id: tmpid,
            name: req.body.name,
            color: req.body.color
        }
        planets[idx] = newPlanet;
        res.send(newPlanet);
    } else {
        res.status(400).send(`No planet with id ${id}`);
    }
});
app.delete('/planets/:id', (req, res) => {
    const tmpid = req.params.id;
    const planet = planets.filter(({id}) => id === +tmpid);
    if (planet) {
        const idx = planets.findIndex((obj => obj.id == tmpid));
        planets.splice(idx, 1);
        res.send(`Planet with id ${tmpid} is deleted`);
    } else {
        res.send(`Planet with id ${tmpid} doesn't exist`);
    }
});*/

app.use('/heroes', planetRouter);
/*app.get('/heroes', (req, res) => {
    res.send(heroes);
});
app.get('/heroes/:id', (req, res) => {
    const tmpid = req.params.id;
    const hero = heroes.filter(({id}) => id === +tmpid);
    if (hero) {
        res.send(hero[0]);
    } else {
        res.status(400).send(`No hero with id ${tmpid}`);
    }
});
app.get('/heroes/origin/:origin', (req, res) => {
    const ori = req.params.origin;
    const hero = heroes.filter(({origin}) => origin === ori);
    if (hero) {
        res.send(hero);
    } else {
        res.status(400).send(`No hero from ${ori}`);
    }
});
app.get('/heroes/power/:power', (req, res) => {
    const pow = req.params.power;
    const hero = heroes.filter(({power}) => power < +pow);
    if (hero) {
        res.send(hero);
    } else {
        res.status(400).send(`No hero from ${ori}`);
    }
});
app.post('/heroes', (req, res) => {
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
});
app.put('/heroes/:id', (req, res) => {
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
});
app.delete('/heroes/:id', (req, res) => {
    const tmpid = req.params.id;
    const hero = heroes.filter(({id}) => id === +tmpid);
    if (hero) {
        const idx = heroes.findIndex((obj => obj.id == tmpid));
        heroes.splice(idx, 1);
        res.send(`Hero with id ${tmpid} is deleted`);
    } else {
        res.send(`Hero with id ${tmpid} doesn't exist`);
    }
});*/

app.get('/picture', (req, res) => {
    const mypath2 = path.join(__dirname, 'public', 'index.jpg');
    res.sendFile(mypath2);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})