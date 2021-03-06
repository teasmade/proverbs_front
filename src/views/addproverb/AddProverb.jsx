import { useReducer, useState } from 'react';
import { Redirect } from 'react-router';
import classes from './AddProverb.module.css';

const axios = require('axios');

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

const AddProverb = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    const createProverbEndpoint = {
      method: 'post',
      url: `${process.env.REACT_APP_BACKEND_URL}/api/proverbs/`,
      data: {
        orig_lang: formData.lang,
        proverb_text: formData.text,
        proverb_date: formData.date,
        proverb_author: formData.name,
      },
    };
    // TODO: best practice for response conf. and error handling on front-end post?
    axios(createProverbEndpoint).catch((error) => {
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
      {redirect ? <Redirect to="/" /> : null}
      <h2 className={classes.title}>
        Add your Words of Wisdom to the Site here...
      </h2>
      {submitting && (
        <div>
          <h2 className={classes.submitting}>
            Sending your proverb... thanks for contributing
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
                <option value="" disabled>
                  -
                </option>
                <option value="EN">English</option>
                <option value="FR">Fran??ais</option>
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
              <p>Proverb Date</p>
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
            <p>Proverb Text</p>
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
    </div>
  );
};

export default AddProverb;
