import React, { useEffect } from 'react';

import styles from './orderTotal.module.scss';

import TotalDetails from './TotalDetals';
import OrderConditions from '../OrderConditions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchAsyncGetOrderStatus } from '../../../../redux/thunks';
import {
  selectResponseOrderStatusData,
  selectResponseOrderStatusLoading,
  selectRoutingSteps,
} from '../../../../redux/reducers/orderSlice';
import Loader from '../../../Loader/Loader';

const buttonTitle = 'Заказать';
const buttonLink = '/order/confirm';
const buttonType = 'order';

const OrderTotal = ({ setIsBreadCrumbs }) => {
  const dispatch = useDispatch();

  const orderStatusResponseData = useSelector(selectResponseOrderStatusData);
  const loadingOrderStatus = useSelector(selectResponseOrderStatusLoading);

  const { stepFour } = useSelector(selectRoutingSteps);

  useEffect(() => {
    if (!orderStatusResponseData) dispatch(fetchAsyncGetOrderStatus());
  }, [dispatch, orderStatusResponseData]);

  return (
    <div className={styles.wrapper}>
      {loadingOrderStatus ? (
        <>
          <div className={styles.colLeft}>
            <TotalDetails />
          </div>
          <div className={styles.colRight}>
            <OrderConditions
              buttonTitle={buttonTitle}
              buttonLink={buttonLink}
              type={buttonType}
              setIsBreadCrumbs={setIsBreadCrumbs}
              visibleStep={stepFour}
            />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default OrderTotal;
