import React from 'react';

import styles from './orderTotal.module.scss';

import TotalDetails from './TotalDetals';
import OrderConditions from '../OrderConditions';

const initialOrderConditionsData = [
  {
    title: 'Пункт выдачи',
    description: 'Ульяновск',
    doubleDescription: 'Нариманова 42',
  },
  {
    title: 'Модель',
    description: 'Hyndai, i30 N',
    doubleDescription: null,
  },
  {
    title: 'Цвет',
    description: 'Голубой',
    doubleDescription: null,
  },
  {
    title: 'Длительность аренды',
    description: '1д 2ч',
    doubleDescription: null,
  },
  {
    title: 'Тариф',
    description: 'На сутки',
    doubleDescription: null,
  },
  {
    title: 'Полный бак',
    description: 'Да',
    doubleDescription: null,
  },
];

const price = 'Цена: 16 000 ₽';
const buttonTitle = 'Заказать';
const buttonLink = '/order/confirm';

const OrderTotal = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.colLeft}>
        <TotalDetails />
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
export default OrderTotal;
