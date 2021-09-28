import React from 'react';

import styles from './itemList.module.scss';

const ItemList = ({ title, description, doubleDescription }) => {
  return (
    <div className={styles.itemList}>
      <ul className={styles.ingredients}>
        <li>
          <p className={styles.title}> {title}</p>
          <div className={styles.value}>
            <p className={styles.description}> {description} </p>
            <p className={styles.description}> {doubleDescription} </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ItemList;
