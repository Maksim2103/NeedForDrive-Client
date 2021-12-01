import React, { useMemo } from 'react';

import styles from './orderCompleted.module.scss';

import OrderConditions from '../OrderConditions';
import CompletedDetails from './CompletedDetails';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectOrderForm,
  selectResponseIdStatus,
  selectResponseOrderStatusData,
  setOrderStatus,
} from '../../../../redux/reducers/orderSlice';
import { fetchAsyncPostOrder } from '../../../../redux/thunks';
import Loader from '../../../Loader/Loader';

const buttonTitle = 'Отменить';
const buttonLink = '/order/canceled';
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
    setIsBreadCrumbs(false);
    dispatch(setOrderStatus(canceledOrderStatus[0]));
    dispatch(
      fetchAsyncPostOrder({
        ...orderForm,
        orderStatusId: canceledOrderStatus[0],
      }),
    );
  };

  const isLoading = useSelector(selectResponseIdStatus);

  return (
    <div className={styles.wrapper}>
      {isLoading === 'succeeded' ? (
        <>
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
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default OrderCompleted;
