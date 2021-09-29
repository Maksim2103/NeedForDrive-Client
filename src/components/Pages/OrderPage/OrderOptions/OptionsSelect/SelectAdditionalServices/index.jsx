import React from 'react';

import styles from './selectAdditionalServices.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SelectAdditionalServices = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Доп услуги</h4>
      <div className={styles.inputsWrapper}>
        <label className={cx('container', 'label-active')}>
          <input className={styles.checkInputButton} type="checkbox" checked />
          <span className={styles.checkSpan}></span>
          Полный бак, 500р
        </label>

        <label className={styles.container}>
          <input className={styles.checkInputButton} type="checkbox" />
          <span className={styles.checkSpan}></span>
          Детское кресло, 200р
        </label>

        <label className={styles.container}>
          <input className={styles.checkInputButton} type="checkbox" />
          <span className={styles.checkSpan}></span>
          Правый руль, 1600р
        </label>
      </div>
    </div>
  );
};
export default SelectAdditionalServices;
