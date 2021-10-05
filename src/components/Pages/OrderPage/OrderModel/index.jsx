import React from 'react';
import OrderConditions from '../OrderConditions';
import ModelList from './ModelList';
import ModelSelect from './ModelSelect';

import styles from './orderModel.module.scss';

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
];

const price = 'Цена: от 10 000 до 32 000 ₽';
const buttonTitle = 'Дополнительно';
const buttonLink = '/order/options';

const OrderModel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.colLeft}>
        <ModelSelect />
        <ModelList />
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
export default OrderModel;
