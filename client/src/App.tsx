import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Deck from "./Deck";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/deck/:id' element={<Deck />} />
      </Routes>
    </Router>
  );
};

export default App;
