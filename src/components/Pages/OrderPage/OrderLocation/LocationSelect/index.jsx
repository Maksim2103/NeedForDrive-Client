import React from 'react';

import styles from './locationSelect.module.scss';

const LocationSelect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__input}>
        <span>Город</span>
        <input type="text" placeholder="Ульяновск" />
      </div>
      <div className={styles.container__input}>
        <span>Пункт выдачи</span>
        <input type="text" placeholder="Начните вводить пункт..." />
      </div>
    </div>
  );
};

export default LocationSelect;
