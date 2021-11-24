import React from 'react';

import MainButton from '../../../../MainButton';

import styles from './orderModalConfirm.module.scss';

const OrderModalConfirm = ({ handleFetchPostOrder, visibleStep }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>Подтвердить заказ</h3>
        <div className={styles.buttonContainer}>
          <MainButton
            buttonWidth="orderConfirmWidth"
            buttonTitle="Подтвердить"
            type="order"
            link="/order/completed"
            onClick={handleFetchPostOrder}
            visibleStep={visibleStep}
          />
          <MainButton
            buttonWidth="orderConfirmWidth"
            buttonTitle="Вернуться"
            type="fuel"
            link="/order/total"
            visibleStep={visibleStep}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderModalConfirm;
