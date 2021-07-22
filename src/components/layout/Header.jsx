import classes from './Header.module.css';

const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <a href="/">
          <h1>Mots to Go</h1>
        </a>
        <h2>SENTENCING PHRASES SINCE 1789</h2>
      </header>
    </div>
  );
};

export default Header;
