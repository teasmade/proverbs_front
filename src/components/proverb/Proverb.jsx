import { Link } from 'react-router-dom';

import classes from './Proverb.module.css';

const Proverb = (props) => {
  const { proverbItem, proverbUse } = props;

  return (
    <div key={proverbItem.id}>
      <div className={classes.proverb}>
        <p className={classes.text}>{proverbItem.proverb_text}</p>
        <div className={classes.byLine}>
          <p className={classes.author}>{proverbItem.proverb_author}</p>
          <p className={classes.date}>{proverbItem.proverb_date}</p>
        </div>
        <div className={classes.proverbFootWrapper}>
          <div>Ratings go here</div>
          {proverbUse === 'multi' ? (
            <Link to={`/proverbs/${proverbItem.id}`}>
              <span>Click for translations...</span>
            </Link>
          ) : (
            'TODO: Add your own translation'
          )}
        </div>
      </div>
    </div>
  );
};

export default Proverb;
