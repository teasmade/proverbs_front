import { useReducer, useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import classes from './AddTranslation.module.css';

import Proverb from '../../components/proverb/Proverb';

const axios = require('axios');

const AddTranslation = (props) => {
  // get related proverb ID from url
  const {
    match: {
      params: { id },
    },
  } = props;

  // states and API call for the individual proverb being translated
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
        // TODO: best practice for response conf. and error handling on front-end post?
        console.error('Error fetching from remote DB:', error);
      });
  }, []);

  // reducer to bundle up form values
  const formReducer = (state, event) => {
    if (event.reset) {
      return {
        lang: '',
        name: '',
        date: '',
        text: '',
      };
    }
    return {
      ...state,
      [event.name]: event.value,
    };
  };

  // states for collected data and managing form submit / end submit states
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    const lang = oneProverbData.orig_lang === 'EN' ? 'FR' : 'EN';
    const createTranslationEndpoint = {
      method: 'post',
      url: 'http://localhost:8080/api/translations/',
      data: {
        trans_lang: lang,
        trans_text: formData.text,
        trans_date: formData.date,
        trans_author: formData.name,
        proverb_id: id,
      },
    };
    // TODO: best practice for response conf. and error handling on front-end post?
    axios(createTranslationEndpoint).catch((error) => {
      console.error('Error writing to remote DB:', error);
    });
    setTimeout(() => {
      setSubmitting(false);
      setFormData({ reset: true });
      setRedirect(true);
    }, 3000);
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div>
      {redirect ? <Redirect to={`/proverbs/${id}`} /> : null}

      {oneProverbData ? (
        <>
          <h2 className={classes.title}>
            Add your best{' '}
            {oneProverbData.orig_lang === 'EN' ? 'FRENCH' : 'ENGLISH'}{' '}
            translation for this Proverb...
          </h2>
          <Proverb proverbItem={oneProverbData} />
          {submitting && (
            <div>
              <h2 className={classes.submitting}>
                Sending your translation... thanks for contributing
              </h2>
            </div>
          )}
          <form className={classes.proverbForm} onSubmit={handleSubmit}>
            <div className={classes.innerFormWrapper}>
              <fieldset disabled={submitting}>
                <label htmlFor="lang">
                  <p>Language</p>
                  <select
                    name="lang"
                    id="lang"
                    onChange={handleChange}
                    value={formData.lang || ''}
                    required
                  >
                    <option
                      value={oneProverbData.orig_lang === 'EN' ? 'FR' : 'EN'}
                      selected
                    >
                      {oneProverbData.orig_lang === 'EN' ? 'FR' : 'EN'}
                    </option>
                  </select>
                </label>
              </fieldset>
              <fieldset disabled={submitting}>
                <label htmlFor="name">
                  <p>Author Name</p>
                  <input
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={formData.name || ''}
                    required
                  />
                </label>
              </fieldset>
              <fieldset disabled={submitting}>
                <label htmlFor="date">
                  <p>Translation Date</p>
                  <input
                    name="date"
                    id="date"
                    onChange={handleChange}
                    value={formData.date || ''}
                    required
                  />
                </label>
              </fieldset>
            </div>
            <fieldset disabled={submitting}>
              <label htmlFor="text">
                <p>Translation Text</p>
                <textarea
                  name="text"
                  id="text"
                  onChange={handleChange}
                  value={formData.text || ''}
                  required
                  rows="5"
                  cols="33"
                />
              </label>
            </fieldset>
            <button type="submit">SUBMIT</button>
          </form>
        </>
      ) : (
        <h2>Loading proverb...</h2>
      )}
    </div>
  );
};

export default AddTranslation;
