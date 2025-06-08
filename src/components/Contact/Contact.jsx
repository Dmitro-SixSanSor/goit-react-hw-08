import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contact}>
      <p>{name}: {number}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}