import React from 'react';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h2>404</h2>
      <p>Сторінку не знайдено</p>
    </div>
  );
};

export default NotFoundPage;