import React from 'react';

import styles from './orderCompleted.module.scss';

import OrderConditions from '../OrderConditions';
import CompletedDetails from './CompletedDetails';

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
const buttonTitle = 'Отменить';
const buttonLink = '/order/complete';
const buttonType = 'fuel';

const OrderCompleted = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.colLeft}>
        <CompletedDetails />
      </div>
      <div className={styles.colRight}>
        <OrderConditions
          data={initialOrderConditionsData}
          price={price}
          buttonTitle={buttonTitle}
          buttonLink={buttonLink}
          type={buttonType}
        />
      </div>
    </div>
  );
};
export default OrderCompleted;
