import { API_URL } from "./config";

export type TDeck = {
    title: String;
    _id: any;
};

export async function getDecks(): Promise<TDeck[]> {
    const res = await fetch(`${API_URL}/decks`);
    return res.json();
}
