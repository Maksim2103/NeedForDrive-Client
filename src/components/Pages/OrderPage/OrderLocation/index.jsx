import React from 'react';
import OrderConditions from '../OrderConditions';
import LocationMap from './LocationMap';
import LocationSelect from './LocationSelect';

import styles from './orderLocation.module.scss';

const OrderLocation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.colLeft}>
        <LocationSelect />
        <p className={styles.text}>Выбрать на карте:</p>
        <LocationMap />
      </div>
      <div className={styles.colRight}>
        <OrderConditions />
      </div>
    </div>
  );
};
export default OrderLocation;
