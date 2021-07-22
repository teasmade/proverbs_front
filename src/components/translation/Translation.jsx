import classes from './Translation.module.css';

const Translation = (props) => {
  const { translationItem } = props;

  return (
    <div className={classes.card}>
      <p className={classes.text}>{translationItem.trans_text}</p>
      <div className={classes.byLine}>
        <p className={classes.author}>{translationItem.trans_author}</p>
        <p className={classes.date}>{translationItem.trans_date}</p>
      </div>
      {/* <div>RATINGS TO GO HERE</div> */}
    </div>
  );
};

export default Translation;
