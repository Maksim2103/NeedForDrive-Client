import React from 'react';

import styles from './modelItem.module.scss';

const ModelItem = ({ model, img, minPrice, maxPrice, onClick }) => {
  const price = `${minPrice} - ${maxPrice} ₽`;

  return (
    <div className={styles.itemContainer} onClick={onClick}>
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
