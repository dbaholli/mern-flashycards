import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createDeck } from "./api/createDeck";
import { deleteDeck } from "./api/deleteDeck";
import { getDecks, TDeck } from "./api/getDecks";
import "./styles/home.scss";

const Home = () => {
  const [decks, setDecks] = useState<TDeck[]>([]);
  const [title, setTitle] = useState("");

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    const deck = await createDeck(title);
    setDecks([...decks, deck]);
    setTitle("");
  }

  async function fetchDecks() {
    const newDecks = await getDecks();
    setDecks(newDecks);
  }

  async function handleDeleteDeck(deckId: String) {
    await deleteDeck(deckId);
    setDecks(decks.filter((deck) => deck._id !== deckId));
  }

  useEffect(() => {
    fetchDecks();
  }, []);

  return (
    <div className='sagecard-main'>
      <form onSubmit={handleCreateDeck} className='form-container'>
        <label htmlFor='deck-title'>Deck Title</label>
        <input
          id='deck-title'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button className='hover-button'>Create</button>
      </form>
      <br />
      <h1>Your decks: </h1>
      <div className='decks-container'>
        {decks.map((deck) => (
          <li key={deck._id}>
            <button
              className='hover-button'
              onClick={() => deleteDeck(deck._id)}
            >
              DELETE
            </button>
            <Link to={`decks/${deck._id}`}>{deck.title}</Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Home;
