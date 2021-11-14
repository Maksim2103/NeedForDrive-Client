import React from 'react';

import styles from './orderCompleted.module.scss';

import OrderConditions from '../OrderConditions';
import CompletedDetails from './CompletedDetails';

const buttonTitle = 'Отменить';
const buttonLink = '/order/total';
const buttonType = 'fuel';

const OrderCompleted = ({ setIsBreadCrumbs }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.colLeft}>
        <CompletedDetails />
      </div>
      <div className={styles.colRight}>
        <OrderConditions
          // data={initialOrderConditionsData}
          // price={price}
          buttonTitle={buttonTitle}
          buttonLink={buttonLink}
          type={buttonType}
          setIsBreadCrumbs={setIsBreadCrumbs}
        />
      </div>
    </div>
  );
};
export default OrderCompleted;
