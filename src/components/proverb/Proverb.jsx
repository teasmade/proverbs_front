import { Link } from 'react-router-dom';

import classes from './Proverb.module.css';

const Proverb = (props) => {
  const { proverbItem, proverbUse } = props;

  return (
    <div key={proverbItem.id}>
      <div className={classes.card}>
        <p className={classes.text}>{proverbItem.proverb_text}</p>
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
};

export default Proverb;
