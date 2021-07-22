// conflict between eslint and prettier over indent
/* eslint-disable indent */
import { useEffect, useState } from 'react';
import classes from './ProverbList.module.css';
import Proverb from '../../components/proverb/Proverb';

const axios = require('axios');

const ProverbList = (props) => {
  const { lang } = props;
  const [proverbData, setProverbData] = useState(null);

  const proverbsEndpoint = {
    method: 'get',
    url: `http://localhost:8080/api/proverbs`,
  };

  useEffect(() => {
    axios(proverbsEndpoint)
      .then((response) => {
        setProverbData(response.data);
      })
      .catch((error) => {
        // TODO: best practice for response conf. and error handling on front-end post?
        console.error('Error fetching from remote DB:', error);
      });
  }, []);

  return (
    <div>
      <div className={classes.proverbsWrapper}>
        {proverbData
          ? proverbData
              // filter data by language from context
              .filter(
                (proverb) =>
                  proverb.orig_lang === lang.toUpperCase() || lang === 'BOTH'
              )
              // sort randomly each time loaded
              .sort(() => {
                return 0.5 - Math.random();
              })
              .map((proverbItem) => {
                return (
                  <Proverb
                    key={proverbItem.id}
                    proverbItem={proverbItem}
                    proverbUse="multi"
                  />
                );
              })
          : 'loading proverbs...'}
      </div>
    </div>
  );
};

export default ProverbList;
