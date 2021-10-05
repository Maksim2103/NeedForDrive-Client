import React from 'react';

import styles from './selectDate.module.scss';

const SelectDate = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Дата аренды</h4>
      <div className={styles.container__input}>
        <span>С</span>
        <input type="text" placeholder="12.06.2019 12:00" />
      </div>
      <div className={styles.container__input}>
        <span>По</span>
        <input type="text" placeholder="Введите дату и время" />
      </div>
    </div>
  );
};
export default SelectDate;
