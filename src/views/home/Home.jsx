import { useContext } from 'react';
import LangContext from '../../context/LangContext';
import classes from './Home.module.css';
import ProverbList from './ProverbList';

const Home = () => {
  // const [lang, setLang] = useState('en');
  const [lang, setLang] = useContext(LangContext);

  return (
    <div className={classes.home}>
      <div className={classes.langWrapper}>
        <h2>Show me Proverbs in ...</h2>
        <label htmlFor="lang">
          <select
            id="lang"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="EN">English</option>
            <option value="FR">Français</option>
          </select>
        </label>
      </div>
      <ProverbList lang={lang} />
    </div>
  );
};

export default Home;
