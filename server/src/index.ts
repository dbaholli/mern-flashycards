import { config } from 'dotenv';
config();
import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import { getDecksController } from './controllers/getDecksController';
import { createdDeckController } from './controllers/createDeckController';
import { deleteDeckController } from './controllers/deleteDeckController';
import { createdCardForDeckController } from './controllers/createCardForDeckController';
import { getDeckController } from './controllers/getDeckController';
import { deleteCardOnDeckController } from './controllers/deleteCardOnDeckController';

const PORT = 4000;

const app = express();

app.use(
    cors({
        origin: "*"
    })
)

// 
app.use(express.json())

// routes and controllers
app.get('/decks', getDecksController);
app.get('/decks/:deckId', getDeckController);
app.post('/decks', createdDeckController);
app.delete('/decks/:deckId', deleteDeckController);
app.post("/decks/:deckId/cards", createdCardForDeckController);
app.delete("/decks/:deckId/cards/:index", deleteCardOnDeckController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});
