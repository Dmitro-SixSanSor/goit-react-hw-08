import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value;
    const number = form.number.value;
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="tel" name="number" placeholder="Phone number" required />
      <button type="submit">Add contact</button>
    </form>
  );
}