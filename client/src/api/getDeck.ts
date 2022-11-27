import { API_URL } from "./config";

export type TDeck = {
    title: String;
    cards: String[];
    _id: String;
};

export async function getDeck(deckId: String): Promise<TDeck> {
    const res = await fetch(`${API_URL}/decks/${deckId}`);
    return res.json();
}
