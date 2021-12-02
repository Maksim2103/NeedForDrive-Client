import React, { useMemo } from 'react';

import styles from './orderCompleted.module.scss';

import OrderConditions from '../OrderConditions';
import CompletedDetails from './CompletedDetails';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectOrderForm,
  selectOrderStatusValue,
  selectResponseIdStatus,
  selectResponseOrderStatusData,
  setOrderStatus,
} from '../../../../redux/reducers/orderSlice';
import { fetchAsyncPostOrder } from '../../../../redux/thunks';
import Loader from '../../../Loader/Loader';

const OrderCompleted = ({ setIsBreadCrumbs }) => {
  const dispatch = useDispatch();

  const orderStatus = useSelector(selectResponseOrderStatusData);
  const orderForm = useSelector(selectOrderForm);

  const isLoading = useSelector(selectResponseIdStatus);

  const orderStatusValue = useSelector(selectOrderStatusValue);
  const orderStatusConfirmed = orderStatusValue === 'Подтвержденные';

  const canceledOrderStatus = useMemo(
    () => orderStatus?.filter((el) => el.name === 'Отмененые'),
    [orderStatus],
  );

  const handleFetchPostOrderCanceled = () => {
    if (orderStatusConfirmed) {
      setIsBreadCrumbs(false);
      dispatch(setOrderStatus(canceledOrderStatus[0]));
      dispatch(
        fetchAsyncPostOrder({
          ...orderForm,
          orderStatusId: canceledOrderStatus[0],
        }),
      );
      return;
    }
  };

  return (
    <div className={styles.wrapper}>
      {isLoading === 'succeeded' ? (
        <>
          <div className={styles.colLeft}>
            <CompletedDetails orderStatusConfirmed={orderStatusConfirmed} />
          </div>
          <div className={styles.colRight}>
            <OrderConditions
              buttonTitle={orderStatusConfirmed ? 'Отменить' : 'На главную'}
              buttonLink={orderStatusConfirmed ? '/order/completed' : '/'}
              type={orderStatusConfirmed ? 'fuel' : 'order'}
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
