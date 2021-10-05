import React from 'react';

import styles from './selectTariff.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SelectTariff = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Тариф</h4>
      <div className={styles.inputsWrapper}>
        <label className={styles.container}>
          <input
            className={styles.radioInputButton}
            type="radio"
            name="TariffSelect"
          />
          <span className={styles.radioSpan}></span>
          Поминутно, 7₽/мин
        </label>

        <label className={cx('container', 'label-active')}>
          <input
            className={styles.radioInputButton}
            type="radio"
            name="TariffSelect"
            checked
          />
          <span className={styles.radioSpan}></span>
          На сутки, 1999 ₽/сутки
        </label>
      </div>
    </div>
  );
};
export default SelectTariff;
