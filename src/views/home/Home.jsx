import { useContext } from 'react';
import LangContext from '../../context/LangContext';
import classes from './Home.module.css';

const Home = () => {
  // const [lang, setLang] = useState('en');
  const [lang, setLang] = useContext(LangContext);

  return (
    <div className={classes.home}>
      <div className={classes.langWrapper}>
        <h2>SHOW ME PROVERBS IN ...</h2>
        <label htmlFor="lang">
          <select
            id="lang"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </label>
      </div>
      <h2>{lang === 'en' ? 'ENGLISH' : 'FRENCH'}</h2>
    </div>
  );
};

export default Home;
