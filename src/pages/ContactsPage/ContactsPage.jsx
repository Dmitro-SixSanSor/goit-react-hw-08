import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectToken } from '../../redux/auth/selectors';
import { setAuthHeader } from '../../services/api';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      setAuthHeader(token);
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);

  return (
    <div className={styles.container}>
      <h2>Ваші Контакти</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
