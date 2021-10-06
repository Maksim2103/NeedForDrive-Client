import React from 'react';
import OrderContainer from './OrderContainer';
import SideBar from '../../SideBar';

import styles from './orderPage.module.scss';

const OrderPage = () => {
  return (
    <div className={styles.orderPage}>
      <SideBar />
      <OrderContainer />
    </div>
  );
};

export default OrderPage;
