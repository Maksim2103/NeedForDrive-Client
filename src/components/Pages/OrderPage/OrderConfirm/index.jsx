import React from 'react';

import styles from './orderConfirm.module.scss';

import TotalDetails from '../OrderTotal/TotalDetals/index';
import OrderConditions from '../OrderConditions';

import OrderModalConfirm from './OrderModalConfirm';

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

const OrderConfirm = () => {
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
      <OrderModalConfirm />
    </div>
  );
};
export default OrderConfirm;
