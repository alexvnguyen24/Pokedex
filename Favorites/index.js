import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import logger from './logger.js';
import Store from './store.js';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const URL = 'http://pokedex:4000/api/pokedex';
let favorites = Store.read();

app.get('/favorites', async (req, res) => {
    try{
        logger.info("Request from /favorites in Favorites was successful.");
        res.status(200).send([favorites]);
    }
    catch(error){
        logger.error("Request from /favorites in Favorites was unsuccessful.");
        res.status(500).send({error: `Error getting Pokemon from favorites: ${error}`});
    }
});

app.post('/addfavorite', async (req, res) => {
    try{
        let {name} = req.body;

        if(!name){
            logger.error("Request from /addfavorite in Favorites was unsuccessful. Name was not provided correctly in body.");
            res.status(404).send({error: `Missing name input to add to favorites.`});
        }

        name = name.toLowerCase();

        const response = await fetch(`${URL}/${name}`, {method: 'GET',});

        if(!response.ok){
            logger.error("Request from /addfavorite in Favorites was unsuccessful. Fetching Pokedex response was unsuccessful.");
            res.status(400).send({error: `Response fetching Pokemon from Pokedex in addfavorite.`});
        }
        const pokemon = await response.json();
        const {abilities, height, id, sprites, types, weight} = pokemon;
        const front = sprites.front_default;
        const back = sprites.back_default;
        const fronticon = pokemon.sprites.other.home.front_default;
        
        const info = {id: id, abilities: abilities, height: height, weight: weight, front: front, back: back, types: types, fronticon: fronticon};
        favorites[name] = info;
        Store.write(favorites);
        logger.info("Request from /addfavorite in Favorites was successful");
        res.status(200).send(info);
    }
    catch(error){
        logger.error("Request from /addfavorite in Favorites was unsuccessful");
        res.status(500).send({error: `Error getting Pokemon from favorites: ${error}`});
    }
});

app.delete('/removefavorite', async (req, res) => {
    try{
        let {name} = req.body;
        if(!name){
            logger.error("Request from /removefavorite in Favorites was unsuccessful. Name was not provided correctly in body.");
            res.status(404).send({error: `Missing name input to remove from favorites.`});
        }
        name = name.toLowerCase();

        delete favorites[name];
        Store.write(favorites);
        logger.info("Request from /addfavorite in Favorites was successful.");
        res.status(200).send(`Removed ${name} from favorites list.`);
    }
    catch(error){
        logger.error("Request from /removefavorite in Favorites was unsuccessful.");
        res.status(500).send({error: `Error removing Pokemon from favorites: ${error}`});
    }
});

app.listen(4001, () => {
  console.log(`(${process.pid}) Favorites Service: Listening on 4001`);
});