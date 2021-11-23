import React from 'react';

import styles from './orderCompleted.module.scss';

import OrderConditions from '../OrderConditions';
import CompletedDetails from './CompletedDetails';

const buttonTitle = 'Отменить';
const buttonLink = '/order/total';
const buttonType = 'fuel';

const OrderCompleted = ({ setIsBreadCrumbs, isRoute }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.colLeft}>
        <CompletedDetails />
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
export default OrderCompleted;
