import React from 'react';
import OrderConditions from '../OrderConditions';
import OptionsSelect from './OptionsSelect';

import styles from './orderOptions.module.scss';

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

const OrderOptions = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.colLeft}>
        <OptionsSelect />
      </div>
      <div className={styles.colRight}>
        <OrderConditions data={initialOrderConditionsData} price={price} />
      </div>
    </div>
  );
};
export default OrderOptions;
