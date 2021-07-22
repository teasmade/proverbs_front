import { Link } from 'react-router-dom';
import classes from './TranslationList.module.css';

import Translation from '../../components/translation/Translation';

const TranslationList = (props) => {
  const { translations, id } = props;

  return (
    <div>
      <div className={classes.listTitle}>
        <h2>
          SOME PEOPLE THOUGHT THESE WERE GOOD TRANSLATIONS. DO YOU DISAGREE ?
        </h2>
        <Link className={classes.addLink} to={`/translations/add/${id}`}>
          <span>ADD YOURS HERE</span>
        </Link>
      </div>
      <div className={classes.transWrapper}>
        {translations.map((translationItem) => {
          return (
            <Translation
              key={translationItem.id}
              translationItem={translationItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TranslationList;
