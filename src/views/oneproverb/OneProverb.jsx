import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './OneProverb.module.css';
import Proverb from '../../components/proverb/Proverb';
import TranslationList from './TranslationList';

const axios = require('axios');

const OneProverb = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;

  const [oneProverbData, setOneProverbData] = useState(null);
  const [translationsData, setTranslationsData] = useState(null);

  const oneProverbEndpoint = {
    method: 'get',
    url: `${process.env.REACT_APP_BACKEND_URL}/api/proverb/${id}`,
  };

  const proverbTranslationsEndpoint = {
    method: 'get',
    url: `${process.env.REACT_APP_BACKEND_URL}/api/proverbtranslations/${id}`,
  };

  useEffect(() => {
    axios
      .all([axios(oneProverbEndpoint), axios(proverbTranslationsEndpoint)])
      .then(
        axios.spread((...responses) => {
          const proverbResponse = responses[0];
          const translationsResponse = responses[1];
          setOneProverbData(proverbResponse.data);
          setTranslationsData(translationsResponse.data);
        })
      )
      .catch((error) => {
        // TODO: best practice for response conf. and error handling on front-end post?
        console.error('Error fetching from remote DB:', error);
      });
  }, []);

  return (
    <div>
      {oneProverbData && translationsData ? (
        <>
          <Proverb
            className={classes.oneProverb}
            proverbItem={oneProverbData}
            proverbUse="single"
          />
          {translationsData[0].emptyMessage ? (
            <div className={classes.noneWrapper}>
              <h2 className={classes.noneTitle}>
                No translations found for this proverb...
              </h2>
              <Link className={classes.addLink} to={`/translations/add/${id}`}>
                <span>Why not add one here</span>
              </Link>
            </div>
          ) : (
            <TranslationList id={id} translations={translationsData} />
          )}
        </>
      ) : (
        `loading proverb and translations ... `
      )}
    </div>
  );
};

export default OneProverb;
