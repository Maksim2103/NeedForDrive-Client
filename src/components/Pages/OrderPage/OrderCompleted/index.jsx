import React, { useMemo } from 'react';

import styles from './orderCompleted.module.scss';

import OrderConditions from '../OrderConditions';
import CompletedDetails from './CompletedDetails';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectResponseOrderStatusData,
  setOrderStatus,
} from '../../../../redux/reducers/orderSlice';

const buttonTitle = 'Отменить';
const buttonLink = '/order/total';
const buttonType = 'fuel';

const OrderCompleted = ({ setIsBreadCrumbs, isRoute }) => {
  const dispatch = useDispatch();

  const orderStatus = useSelector(selectResponseOrderStatusData);

  const canceledOrderStatus = useMemo(
    () => orderStatus?.filter((el) => el.name === 'Отмененые'),
    [orderStatus],
  );

  const handleFetchPostOrderCanceled = () => {
    setIsBreadCrumbs(true);
    dispatch(setOrderStatus(canceledOrderStatus[0]));
  };

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
          handleClick={handleFetchPostOrderCanceled}
        />
      </div>
    </div>
  );
};
export default OrderCompleted;
