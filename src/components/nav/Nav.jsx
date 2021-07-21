import { Link } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/add">
        <span>Add your Proverb</span>
      </Link>
    </nav>
  );
};

export default Nav;
