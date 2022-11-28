import { Link } from "react-router-dom";
import "../styles/header.scss";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='header'>
      <div className='header-items'>
        <Link to='/' className='header-item'>
          Home
        </Link>
        <Link to='/decks' className='header-item'>
          Decks
        </Link>
        <Link to='/login' className='header-item'>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
