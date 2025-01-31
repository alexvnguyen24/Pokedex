import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import logger from './logger.js';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const URL = 'https://pokeapi.co/api/v2/pokemon/';

app.get('/api/pokedex/:name', async (req, res) => {
    try{
        const name = req.params.name;
        const response = await fetch(`${URL}/${name}`);

        if(!response.ok){
            logger.error(`Request from /api/pokedex/${name} in PokeDex was successful. Error fetching from the PokeAPI.`);
            res.status(400).send({error: `Error fetching Pokemon from API: ${error}`});
        }

        const pokemon = await response.json();
        logger.info(`Request from /api/pokedex/${name} in PokeDex was successful.`);
        
        res.status(200).send(pokemon);
    }
    catch(error){
        logger.error(`Request from /api/pokedex/${name} in PokeDex was unsuccessful.`);
        res.status(500).send({error: `Error getting Pokemon from API: ${error}`});
    }
});

app.listen(4000, () => {
  console.log(`(${process.pid}) Pokedex Service: Listening on 4000`);
});
