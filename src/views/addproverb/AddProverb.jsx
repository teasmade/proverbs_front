import { useReducer, useState } from 'react';
import classes from './AddProverb.module.css';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    alert('You have submitted the form.');
    console.log(formData);
    setTimeout(() => {
      setSubmitting(false);
      setFormData({ reset: true });
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
      {submitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>:{value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form className={classes.proverbForm} onSubmit={handleSubmit}>
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
              <option value="FR">Français</option>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProverb;