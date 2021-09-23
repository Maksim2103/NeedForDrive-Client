import React from 'react';
import HeaderContent from '../../../Content/HeaderContent';
import OrderBreadCrumbs from '../OrderBreadCrumbs';

import styles from './orderContainer.module.scss';

const OrderContainer = () => {
  return (
    <div className={styles.orderContainer}>
      <div className={styles.headerContainer}>
        <HeaderContent />
      </div>
      <OrderBreadCrumbs />
      <div></div>
    </div>
  );
};

export default OrderContainer;
