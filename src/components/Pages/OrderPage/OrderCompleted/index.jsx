import React, { useMemo } from 'react';

import styles from './orderCompleted.module.scss';

import OrderConditions from '../OrderConditions';
import CompletedDetails from './CompletedDetails';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectOrderForm,
  selectResponseOrderStatusData,
  setOrderStatus,
} from '../../../../redux/reducers/orderSlice';
import { fetchAsyncPostOrder } from '../../../../redux/thunks';

const buttonTitle = 'Отменить';
const buttonLink = '/order/total';
const buttonType = 'fuel';

const OrderCompleted = ({ setIsBreadCrumbs }) => {
  const dispatch = useDispatch();

  const orderStatus = useSelector(selectResponseOrderStatusData);
  const orderForm = useSelector(selectOrderForm);

  const canceledOrderStatus = useMemo(
    () => orderStatus?.filter((el) => el.name === 'Отмененые'),
    [orderStatus],
  );

  const handleFetchPostOrderCanceled = () => {
    setIsBreadCrumbs(true);
    dispatch(setOrderStatus(canceledOrderStatus[0]));
    dispatch(
      fetchAsyncPostOrder({
        ...orderForm,
        orderStatusId: canceledOrderStatus[0],
      }),
    );
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
          handleClick={handleFetchPostOrderCanceled}
          visibleStep={true}
        />
      </div>
    </div>
  );
};
export default OrderCompleted;
