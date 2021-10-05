import React from 'react';

import styles from './selectColor.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SelectColor = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Цвет</h4>
      <div className={styles.inputsWrapper}>
        <label className={styles.container}>
          <input
            className={styles.radioInputButton}
            type="radio"
            name="ColorSelect"
          />
          <span className={styles.radioSpan}></span>
          Любой
        </label>

        <label className={styles.container}>
          <input
            className={styles.radioInputButton}
            type="radio"
            name="ColorSelect"
          />
          <span className={styles.radioSpan}></span>
          Красный
        </label>

        <label className={cx('container', 'label-active')}>
          <input
            className={styles.radioInputButton}
            type="radio"
            name="ColorSelect"
            checked
          />
          <span className={styles.radioSpan}></span>
          Голубой
        </label>
      </div>
    </div>
  );
};
export default SelectColor;
