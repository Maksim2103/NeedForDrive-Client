import React from 'react';
import MainButton from '../../MainButton';

import styles from './sliderItem.module.scss';

import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const SliderItem = ({ title, description, type }) => {
  return (
    <div className={cx('item', `${type}`)}>
      <div className={styles.inner}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <MainButton buttonWidth="small" buttonText="Подробнее" type={type} />
      </div>
    </div>
  );
};

export default SliderItem;
