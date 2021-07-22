import { useEffect, useState } from 'react';
// import classes from './OneProverb.module.css';
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
    url: `http://localhost:8080/api/proverb/${id}`,
  };

  const proverbTranslationsEndpoint = {
    method: 'get',
    url: `http://localhost:8080/api/proverbtranslations/${id}`,
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
        console.error('Error fetching from remote DB:', error);
      });
  }, []);

  return (
    <div>
      {oneProverbData && translationsData ? (
        <>
          <Proverb proverbItem={oneProverbData} proverbUse="single" />
          {translationsData[0].emptyMessage ? (
            <div>
              <span>
                No translations found for this proverb - why not add some?
              </span>
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
