import classes from './Header.module.css';

const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <a href="/">
          <h1>
            Mots{' '}
            <span
              style={{
                transform: 'rotate(-3deg)',
                color: 'red',
                fontSize: '3.75rem',
                display: 'inline-block',
              }}
            >
              2
            </span>{' '}
            Go
          </h1>
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
