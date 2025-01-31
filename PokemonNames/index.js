import cors from 'cors';
import express from 'express';
import fs from 'fs';
import morgan from 'morgan';
import logger from './logger.js';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


app.get('/api/kanto', (req, res) => {
    try {
        const data = fs.readFileSync('pokemonNames.json', 'utf8');
        const text = JSON.parse(data);
        const kanto = text["Kanto"];
        logger.info("Request from /api/kanto in PokemonNames was successful.");
        res.status(200).send(kanto);
    } catch (err) {
        logger.error("Request from /api/kanto in PokemonNames was unsuccessful.");
        if (err.code === 'ENOENT') {
            res.status(500).send({error: err});
            return;
        } else {
            res.status(500).send({error: err});
            return;
        }
    }
});

app.get('/api/johto', (req, res) => {
    try {
        const data = fs.readFileSync('pokemonNames.json', 'utf8');
        const text = JSON.parse(data);
        const johto = text["Johto"];
        logger.info("Request from /api/johto in PokemonNames was successful.");
        res.status(200).send(johto);
    } catch (err) {
        logger.info("Request from /api/johto in PokemonNames was unsuccessful.");
        if (err.code === 'ENOENT') {
            res.status(500).send({error: err});
            return;
        } else {
            res.status(500).send({error: err});
            return;
        }
    }
});

app.get('/api/hoenn', (req, res) => {
    try {
        const data = fs.readFileSync('pokemonNames.json', 'utf8');
        const text = JSON.parse(data);
        const hoenn = text["Hoenn"];
        logger.info("Request from /api/hoenn in PokemonNames was successful.");
        res.status(200).send(hoenn);
    } catch (err) {
        logger.info("Request from /api/hoenn in PokemonNames was unsuccessful.");
        if (err.code === 'ENOENT') {
            res.status(500).send({error: err});
            return;
        } else {
            res.status(500).send({error: err});
            return;
        }
    }
});

app.get('/api/sinnoh', (req, res) => {
    try {
        const data = fs.readFileSync('pokemonNames.json', 'utf8');
        const text = JSON.parse(data);
        const sinnoh = text["Sinnoh"];
        logger.info("Request from /api/sinnoh in PokemonNames was successful.");
        res.status(200).send(sinnoh);
    } catch (err) {
        logger.info("Request from /api/sinnoh in PokemonNames was unsuccessful.");
        if (err.code === 'ENOENT') {
            res.status(500).send({error: err});
            return;
        } else {
            res.status(500).send({error: err});
            return;
        }
    }
});

app.get('/api/unova', (req, res) => {
    try {
        const data = fs.readFileSync('pokemonNames.json', 'utf8');
        const text = JSON.parse(data);
        const unova = text["Unova"];
        logger.info("Request from /api/unova in PokemonNames was successful.");
        res.status(200).send(unova);
    } catch (err) {
        logger.info("Request from /api/unova in PokemonNames was unsuccessful.");
        if (err.code === 'ENOENT') {
            res.status(500).send({error: err});
            return;
        } else {
            res.status(500).send({error: err});
            return;
        }
    }
});

app.get('/api/kalos', (req, res) => {
    try {
        const data = fs.readFileSync('pokemonNames.json', 'utf8');
        const text = JSON.parse(data);
        const kalos = text["Kalos"];
        logger.info("Request from /api/kalos in PokemonNames was successful.");
        res.status(200).send(kalos);
    } catch (err) {
        logger.info("Request from /api/kalos in PokemonNames was unsuccessful.");
        if (err.code === 'ENOENT') {
            res.status(500).send({error: err});
            return;
        } else {
            res.status(500).send({error: err});
            return;
        }
    }
});

app.get('/api/alola', (req, res) => {
    try {
        const data = fs.readFileSync('pokemonNames.json', 'utf8');
        const text = JSON.parse(data);
        const alola = text["Alola"];
        logger.info("Request from /api/alola in PokemonNames was successful.");
        res.status(200).send(alola);
    } catch (err) {
        logger.info("Request from /api/alola in PokemonNames was unsuccessful.");
        if (err.code === 'ENOENT') {
            res.status(500).send({error: err});
            return;
        } else {
            res.status(500).send({error: err});
            return;
        }
    }
});

app.get('/api/galar', (req, res) => {
    try {
        const data = fs.readFileSync('pokemonNames.json', 'utf8');
        const text = JSON.parse(data);
        const galar = text["Galar"];
        logger.info("Request from /api/galar in PokemonNames was successful.");
        res.status(200).send(galar);
    } catch (err) {
        logger.info("Request from /api/galar in PokemonNames was unsuccessful.");
        if (err.code === 'ENOENT') {
            res.status(500).send({error: err});
            return;
        } else {
            res.status(500).send({error: err});
            return;
        }
    }
});

app.get('/api/paldea', (req, res) => {
    try {
        const data = fs.readFileSync('pokemonNames.json', 'utf8');
        const text = JSON.parse(data);
        const paldea = text["Paldea"];
        logger.info("Request from /api/paldea in PokemonNames was successful.");
        res.status(200).send(paldea);
    } catch (err) {
        logger.info("Request from /api/paldea in PokemonNames was unsuccessful.");
        if (err.code === 'ENOENT') {
            res.status(500).send({error: err});
            return;
        } else {
            res.status(500).send({error: err});
            return;
        }
    }
});

app.get('/api/hisui', (req, res) => {
    try {
        const data = fs.readFileSync('pokemonNames.json', 'utf8');
        const text = JSON.parse(data);
        const hisui = text["Hisui"];
        logger.info("Request from /api/hisui in PokemonNames was successful.");
        res.status(200).send(hisui);
    } catch (err) {
        logger.info("Request from /api/hisui in PokemonNames was unsuccessful.");
        if (err.code === 'ENOENT') {
            res.status(500).send({error: err});
            return;
        } else {
            res.status(500).send({error: err});
            return;
        }
    }
});

app.listen(4002, () => {
    console.log(`(${process.pid}) Pokemon Names Service: Listening on 4002`);
});
  