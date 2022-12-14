import { API_URL } from "./config";

export type TDeck = {
    title: String;
    cards: String[];
    _id: String;
};

export async function getDecks(): Promise<TDeck[]> {
    const res = await fetch(`${API_URL}/decks`);
    return res.json();
}
