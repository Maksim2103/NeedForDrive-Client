import React from 'react';

import styles from './orderTotal.module.scss';

import TotalDetails from './TotalDetals';
import OrderConditions from '../OrderConditions';

const buttonTitle = 'Заказать';
const buttonLink = '/order/confirm';
const buttonType = 'order';

const OrderTotal = ({ setIsBreadCrumbs, isRoute }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.colLeft}>
        <TotalDetails />
      </div>
      <div className={styles.colRight}>
        <OrderConditions
          buttonTitle={buttonTitle}
          buttonLink={buttonLink}
          type={buttonType}
          setIsBreadCrumbs={setIsBreadCrumbs}
          isRoute={isRoute}
        />
      </div>
    </div>
  );
};
export default OrderTotal;
