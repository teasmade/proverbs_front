import { useContext, useReducer, useState } from 'react';
import LangContext from '../../context/LangContext';
import classes from './AddProverb.module.css';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const AddProverb = () => {
  const [lang, setLang] = useContext(LangContext);
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    alert('You have submitted the form.');
    console.log(formData);
    setTimeout(() => {
      setSubmitting(false);
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
      <h2 className={classes.title}>
        Add your Words of Wisdom to the Site here...
      </h2>
      {submitting && <div>Submitting Form...</div>}
      <form className={classes.proverbForm} onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">
            <p>Your Name</p>
            <input name="name" onChange={handleChange} />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="lang">
            <p>Proverb language</p>
            <select
              id="lang"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProverb;
