import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Вітаємо у Книзі Контактів</h1>
      <p>Це додаток для керування вашими контактами з авторизацією.</p>
    </div>
  );
};

export default HomePage;