import React from 'react';

import styles from './modelSelect.module.scss';

const ModelSelect = () => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.container}>
        <input className={styles.radioInputButton} type="radio" checked />
        <span className={styles.radioSpan}></span>
        Все модели
      </label>

      <label className={styles.container}>
        <input className={styles.radioInputButton} type="radio" />
        <span className={styles.radioSpan}></span>
        Эконом
      </label>

      <label className={styles.container}>
        <input className={styles.radioInputButton} type="radio" />
        <span className={styles.radioSpan}></span>
        Премиум
      </label>
    </div>
  );
};
export default ModelSelect;
