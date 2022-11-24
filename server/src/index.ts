import { config } from 'dotenv';
config();
import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import { getDecksController } from './controllers/getDeckController';
import { createdDeckController } from './controllers/createDeckController';
import { deleteDeckController } from './controllers/deleteDeckController';
import { createdCardForDeckController } from './controllers/createCardForDeckController';

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
app.post('/decks', createdDeckController);
app.delete('/decks/:deckId', deleteDeckController)
app.post("/decks/:deckId/cards", createdCardForDeckController)

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
});
