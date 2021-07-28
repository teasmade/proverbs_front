import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Proverb.module.css';

// a function to take each space seperated word of a string and randomly assign a span with some css to it
const fancify = (text) => {
  return text.split(' ').map((word) =>
    word.length > 2 && Math.random() > 0.65 ? (
      <span
        key={word + Math.random()}
        style={{
          transform: `rotate(${
            Math.floor(Math.random() * 5) * (Math.round(Math.random()) ? 1 : -1)
          }deg)`,
          color: 'red',
          paddingRight: '0.5rem',
          display: 'inline-block',
        }}
      >
        {`${word}`}{' '}
      </span>
    ) : (
      `${word} `
    )
  );
};

// memoized component to prevent re-renders in add translation form view.
const Proverb = React.memo(function Proverb(props) {
  const { proverbItem, proverbUse } = props;

  const specialText = fancify(proverbItem.proverb_text);

  return (
    <div key={proverbItem.id}>
      <div className={classes.card}>
        <p className={classes.text}>{specialText}</p>
        <div className={classes.byLine}>
          <p className={classes.author}>{proverbItem.proverb_author}</p>
          <p className={classes.date}>{proverbItem.proverb_date}</p>
        </div>
        <div className={classes.proverbFootWrapper}>
          {proverbUse === 'multi' ? (
            <Link
              className={classes.endLine}
              to={`/proverbs/${proverbItem.id}`}
            >
              <span>SEE TRANSLATIONS</span>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
});

export default Proverb;
