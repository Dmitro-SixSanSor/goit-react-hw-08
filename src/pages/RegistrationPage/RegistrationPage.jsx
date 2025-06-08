import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={styles.container}>
      <h2>Реєстрація</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;