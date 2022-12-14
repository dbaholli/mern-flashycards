import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Deck from "./Deck";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/decks/:deckId' element={<Deck />} />
      </Routes>
    </Router>
  );
};

export default App;
