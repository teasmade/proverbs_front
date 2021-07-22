import { useEffect, useState } from 'react';
// import classes from './OneProverb.module.css';
import Proverb from '../../components/proverb/Proverb';

const axios = require('axios');

const OneProverb = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;

  const [oneProverbData, setOneProverbData] = useState(null);

  const oneProverbEndpoint = {
    method: 'get',
    url: `http://localhost:8080/api/proverb/${id}`,
  };

  useEffect(() => {
    axios(oneProverbEndpoint)
      .then((response) => {
        setOneProverbData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching from remote DB:', error);
      });
  }, []);

  return (
    <div>
      <h2>Proverb number {`${id}`}</h2>
      <p>Im a proverb page</p>
      {oneProverbData ? (
        <Proverb proverbItem={oneProverbData} proverbUse="single" />
      ) : (
        'loading proverb and translations ...'
      )}
    </div>
  );
};

export default OneProverb;
