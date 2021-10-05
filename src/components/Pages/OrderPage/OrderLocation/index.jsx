import React from 'react';
import OrderConditions from '../OrderConditions';
import LocationMap from './LocationMap';
import LocationSelect from './LocationSelect';

import styles from './orderLocation.module.scss';

const initialOrderConditionsData = [
  {
    title: 'Пункт выдачи',
    description: 'Ульяновск',
    doubleDescription: 'Нариманова 42',
  },
];

const price = 'Цена: от 8 000 до 12 000 ₽';
const buttonTitle = 'Выбрать модель';
const buttonLink = '/order/model';

const OrderLocation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.colLeft}>
        <LocationSelect />
        <p className={styles.text}>Выбрать на карте:</p>
        <LocationMap />
      </div>
      <div className={styles.colRight}>
        <OrderConditions
          data={initialOrderConditionsData}
          price={price}
          buttonTitle={buttonTitle}
          buttonLink={buttonLink}
        />
      </div>
    </div>
  );
};
export default OrderLocation;
