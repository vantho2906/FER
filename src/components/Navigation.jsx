import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="teal accent-4">
      <div className="nav-wrapper">
        <Link className="brand-logo" to="/">
          <span>Film</span>
          <Icon>local_play</Icon>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">
              <Icon left>home</Icon> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <Icon left>info_outline</Icon> About
            </Link>
          </li>
          <li>
            <Link to="/news">
              <Icon left>dvr</Icon> News
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <Icon left>contacts</Icon> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
