import React, { useState } from 'react';
import OrderContainer from './OrderContainer';
import SideBar from '../../SideBar';

import styles from './orderPage.module.scss';
import OrderConfirm from './OrderConfirm';

const OrderPage = () => {
  const [openp, setOpenP] = useState(false);

  return (
    <div className={styles.orderPage}>
      <SideBar />
      <OrderContainer />
    </div>
  );
};

export default OrderPage;
