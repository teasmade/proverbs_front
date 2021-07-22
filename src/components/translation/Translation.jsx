import classes from './Translation.module.css';

// a function to take each space seperated word of a string and randomly assign a span with some css to it
const fancify = (text) => {
  return text.split(' ').map((word) =>
    word.length > 2 && Math.random() > 0.6 ? (
      <span
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

const Translation = (props) => {
  const { translationItem } = props;

  const specialText = fancify(translationItem.trans_text);

  return (
    <div className={classes.card}>
      <p className={classes.text}>{specialText}</p>
      <div className={classes.byLine}>
        <p className={classes.author}>{translationItem.trans_author}</p>
        <p className={classes.date}>{translationItem.trans_date}</p>
      </div>
      {/* <div>RATINGS TO GO HERE</div> */}
    </div>
  );
};

export default Translation;
