import React from 'react';
import MainButton from '../../MainButton';

import styles from './sliderItem.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

<<<<<<< HEAD
const SliderItem = ({ title, description, type, link }) => {
=======
const SliderItem = ({ title, description, type }) => {
>>>>>>> master
  return (
    <div className={cx('item', `${type}`)}>
      <div className={styles.inner}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
<<<<<<< HEAD
        <MainButton
          buttonWidth="small"
          buttonText="Подробнее"
          type={type}
          link={link}
        />
=======
        <MainButton buttonWidth="small" buttonText="Подробнее" type={type} />
>>>>>>> master
      </div>
    </div>
  );
};

export default SliderItem;
