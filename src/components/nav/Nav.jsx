import { Link } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <Link to="/">
        <span>HOME</span>
      </Link>
      <Link to="/add">
        <span>ADD YOUR PROVERB</span>
      </Link>
    </nav>
  );
};

export default Nav;
