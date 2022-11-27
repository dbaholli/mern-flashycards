import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createCard } from "./api/createCard";
import { deleteCard } from "./api/deleteCard";
import { getDeck } from "./api/getDeck";
import { TDeck } from "./api/getDecks";

const Deck = () => {
  const [deck, setDeck] = useState<TDeck | undefined>();
  const [cards, setCards] = useState<String[]>([]);
  const [text, setText] = useState("");

  const { deckId } = useParams();

  async function handleCreateCard(e: React.FormEvent) {
    e.preventDefault();
    const { cards: serverCards } = await createCard(deckId!, text);
    setCards(serverCards);
    setText("");
  }

  async function fetchDeck() {
    if (!deckId) return;
    const newDeck = await getDeck(deckId);
    setDeck(newDeck);
    setCards(newDeck.cards);
  }

  async function handleDeleteCard(index: number) {
    if (!deckId) return;
    const newDeck = await deleteCard(deckId, index);
    setCards(newDeck.cards);
  }

  useEffect(() => {
    fetchDeck();
  }, [deckId]);

  return (
    <div className='sagecard-main'>
      Card Form
      <form onSubmit={handleCreateCard} className='form-container'>
        <label htmlFor='deck-title'>Card Title</label>
        <input
          id='deck-title'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <button className='hover-button'>Create</button>
      </form>
      <div className='decks-container'>
        {cards.map((card, index) => (
          <li key={index}>
            <button onClick={() => handleDeleteCard(index)}>X</button>
            {card}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Deck;
