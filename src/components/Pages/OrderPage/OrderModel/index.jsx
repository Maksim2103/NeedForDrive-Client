import React from 'react';
import OrderConditions from '../OrderConditions';
import ModelList from './ModelList';
import ModelSelect from './ModelSelect';

import styles from './orderModel.module.scss';

const buttonTitle = 'Дополнительно';
const buttonLink = '/order/options';
const buttonType = 'order';

const OrderModel = ({ setIsBreadCrumbs }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.colLeft}>
        <ModelSelect />
        <ModelList />
      </div>
      <div className={styles.colRight}>
        <OrderConditions
          // data={data}
          buttonTitle={buttonTitle}
          buttonLink={buttonLink}
          type={buttonType}
          setIsBreadCrumbs={setIsBreadCrumbs}
        />
      </div>
    </div>
  );
};
export default OrderModel;
