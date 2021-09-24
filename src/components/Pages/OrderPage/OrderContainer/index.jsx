import React from 'react';

import HeaderContent from '../../../Content/HeaderContent';
import OrderBreadCrumbs from '../OrderBreadCrumbs';
import OrderLocation from '../OrderLocation';

import styles from './orderContainer.module.scss';

const OrderContainer = () => {
  return (
    <div className={styles.orderContainer}>
      <div className={styles.headerContainer}>
        <HeaderContent />
      </div>
      <div className={styles.orderBreadCrumbs}>
        <OrderBreadCrumbs />
      </div>
      <OrderLocation />
    </div>
  );
};

export default OrderContainer;
