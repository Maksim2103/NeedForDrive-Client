import React from 'react';

import styles from './modelItem.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ModelItem = ({ model, img, price, active }) => {
  return (
    <div className={cx('itemContainer', active ? 'active' : null)}>
      <div className={styles.itemDescription}>
        <h3 className={styles.model}>{model}</h3>
        <h3 className={styles.price}>{price}</h3>
      </div>
      <div className={styles.itemImage}>
        <img src={img} alt="car" />
      </div>
    </div>
  );
};
export default ModelItem;
