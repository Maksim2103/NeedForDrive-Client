import React from 'react';

import styles from './orderTotal.module.scss';

import TotalDetails from './TotalDetals';
import OrderConditions from '../OrderConditions';

const buttonTitle = 'Заказать';
const buttonLink = '/order/confirm';
const buttonType = 'order';

const OrderTotal = ({ setIsBreadCrumbs }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.colLeft}>
        <TotalDetails />
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
export default OrderTotal;
