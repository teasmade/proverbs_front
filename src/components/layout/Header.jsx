import classes from './Header.module.css';

const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <h1>Mots to Go</h1>
        <h2>SETENCING PHRASES SINCE 1789</h2>
      </header>
    </div>
  );
};

export default Header;
