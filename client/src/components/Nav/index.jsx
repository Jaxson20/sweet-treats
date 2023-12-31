import { Link } from "react-router-dom";

import { THEME_TOGGLE } from "../../utils/actions";
import { useStoreContext } from "../../utils/store-context";
import Auth from "../../utils/auth";

import logo from '../../assets/images/logo.png';
import darkToggle from '../../assets/images/dark-toggle.svg';

import './style.scss';

export default function Nav() {
  const [theme, dispatch] = useStoreContext('theme');

  return (
    <header className={`header-theme__${theme.dark ? 'dark' : 'light'}`}>
      <div>
        <img className="header-logo" src={logo} alt="Logo" />
      </div>

      <div>
        <nav>
              <Link to="/">Home</Link>
              <Link to="/profile">Orders</Link>  
              <Link to="/Ingredients">Ingredients</Link>
              <Link to="/Aboutme">About Me</Link>  
        </nav>

        <img
          onClick={() => dispatch({ type: THEME_TOGGLE })}
          className="header-theme-toggle"
          src={darkToggle}
          alt="Theme Toggle"
        />
      </div>
    </header>
  );
}