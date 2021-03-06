import React from 'react';
import MainButton from '../../MainButton';

import styles from './sliderItem.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const buttonTitle = 'Подробнее';

const SliderItem = ({ title, description, type, link }) => {
  return (
    <div className={cx('item', `${type}`)}>
      <div className={styles.inner}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <MainButton
          buttonWidth="small"
          buttonTitle={buttonTitle}
          type={type}
          link={link}
          visibleStep={true}
        />
      </div>
    </div>
  );
};

export default SliderItem;
