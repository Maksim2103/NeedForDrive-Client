import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentId } from '../../../../../../redux/reducers/orderSlice';

import classNames from 'classnames/bind';

import styles from './modelItem.module.scss';

const cx = classNames.bind(styles);

const ModelItem = ({ model, img, minPrice, maxPrice, onClick, elementId }) => {
  const currentId = useSelector(selectCurrentId);

  const price = `${minPrice} - ${maxPrice} ₽`;

  return (
    <div
      className={cx('itemContainer', elementId === currentId ? 'active' : null)}
      onClick={onClick}
    >
      <div className={styles.itemDescription}>
        <h3 className={styles.model}>{model}</h3>
        <h3 className={styles.price}>{price}</h3>
      </div>
      <div className={styles.itemImage}>
        <img
          alt="Car_Photo "
          src={img}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://pixy.org/src/38/386334.png';
          }}
        />
      </div>
    </div>
  );
};
export default ModelItem;
