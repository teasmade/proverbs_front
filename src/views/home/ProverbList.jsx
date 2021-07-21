// conflict between eslint and prettier over indent
/* eslint-disable indent */
import { useEffect, useState } from 'react';
import classes from './ProverbList.module.css';

const axios = require('axios');

const ProverbList = (props) => {
  const { lang } = props;
  const [proverbData, setProverbData] = useState(null);

  const endpoint = {
    method: 'get',
    url: `http://localhost:8080/api/proverbs`,
  };

  useEffect(() => {
    axios(endpoint).then((response) => {
      setProverbData(response.data);
    });
  }, []);

  return (
    <div>
      <div className={classes.proverbsWrapper}>
        {proverbData
          ? proverbData
              // filter data by language from context
              .filter((proverb) => proverb.orig_lang === lang.toUpperCase())
              // sort randomly each time loaded
              .sort(() => {
                return 0.5 - Math.random();
              })
              .map((proverb) => {
                return (
                  <>
                    <div className={classes.proverb}>
                      <p className={classes.text}>{proverb.proverb_text}</p>
                      <div className={classes.byLine}>
                        <p className={classes.author}>
                          {proverb.proverb_author}
                        </p>
                        <p className={classes.date}>{proverb.proverb_date}</p>
                      </div>
                      <div className={classes.proverbFootWrapper}>
                        <div>Ratings go here</div>
                        <div>Link to translations</div>
                      </div>
                    </div>
                  </>
                );
              })
          : 'loading proverbs..'}
      </div>
      <div>{lang}</div>
    </div>
  );
};

export default ProverbList;
