import React from 'react';

import styles from './notFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <h3>404</h3>
      <h3>Упс, данная страница не существует...</h3>
    </div>
  );
};

export default NotFoundPage;
