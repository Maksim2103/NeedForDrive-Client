import React from 'react';

import styles from './orderConfirm.module.scss';

import TotalDetails from '../OrderTotal/TotalDetals/index';
import OrderConditions from '../OrderConditions';

import OrderModalConfirm from './OrderModalConfirm';

const buttonTitle = 'Заказать';
const buttonLink = '/order/confirm';
const buttonType = 'order';

const OrderConfirm = ({ setIsBreadCrumbs, isRoute }) => {
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
      <OrderModalConfirm
        setIsBreadCrumbs={setIsBreadCrumbs}
        isRoute={isRoute}
      />
    </div>
  );
};
export default OrderConfirm;
