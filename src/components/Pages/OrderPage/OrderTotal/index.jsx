import React, { useEffect } from 'react';

import styles from './orderTotal.module.scss';

import TotalDetails from './TotalDetals';
import OrderConditions from '../OrderConditions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchAsyncGetOrderStatus } from '../../../../redux/thunks';
import { selectResponseOrderStatusData } from '../../../../redux/reducers/orderSlice';

const buttonTitle = 'Заказать';
const buttonLink = '/order/confirm';
const buttonType = 'order';

const OrderTotal = ({ setIsBreadCrumbs, isRoute }) => {
  const dispatch = useDispatch();

  const orderStatusResponseData = useSelector(selectResponseOrderStatusData);

  useEffect(() => {
    if (!orderStatusResponseData) dispatch(fetchAsyncGetOrderStatus());
  }, [dispatch, orderStatusResponseData]);

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
    </div>
  );
};
export default OrderTotal;
