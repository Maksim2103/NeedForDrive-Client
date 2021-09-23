import React from 'react';

import styles from './headerContent.module.scss';

const HeaderContent = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Need for drive</p>
      <p className={styles.text}>Ульяновск</p>
    </div>
  );
};

export default HeaderContent;
