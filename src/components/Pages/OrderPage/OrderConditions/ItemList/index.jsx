import React from 'react';

import styles from './itemList.module.scss';

const ItemList = () => {
  return (
    <div className={styles.itemList}>
      <ul className={styles.ingredients}>
        <li>
          <p className={styles.title}> Пункт выдачи</p>
          <div className={styles.value}>
            <p className={styles.description}>Ульяновск,</p>
            <p className={styles.description}>Нариманова 42</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ItemList;
