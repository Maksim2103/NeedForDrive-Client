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

const OrderModel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.colLeft}>
        <ModelSelect />
        <ModelList />
      </div>
      <div className={styles.colRight}>
        <OrderConditions data={initialOrderConditionsData} />
      </div>
    </div>
  );
};
export default OrderModel;
