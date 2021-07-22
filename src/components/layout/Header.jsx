import classes from './Header.module.css';

const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <a href="/">
          <h1>Mots to Go</h1>
        </a>
        <h2>
          SENTENCING{' '}
          <span
            style={{
              transform: 'rotate(4deg)',
              color: 'red',
              display: 'inline-block',
            }}
          >
            PHRASES
          </span>{' '}
          SINCE 1789
        </h2>
      </header>
    </div>
  );
};

export default Header;
