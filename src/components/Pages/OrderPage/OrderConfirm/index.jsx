import React, { useEffect, useMemo } from 'react';

import styles from './orderConfirm.module.scss';

import TotalDetails from '../OrderTotal/TotalDetals/index';
import OrderConditions from '../OrderConditions';

import OrderModalConfirm from './OrderModalConfirm';
import {
  selectOrderForm,
  selectResponseOrderStatusData,
  setOrderStatus,
} from '../../../../redux/reducers/orderSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncPostOrder } from '../../../../redux/thunks';

const buttonTitle = 'Заказать';
const buttonLink = '/order/confirm';
const buttonType = 'order';

const OrderConfirm = ({ setIsBreadCrumbs, isRoute }) => {
  const dispatch = useDispatch();

  const orderForm = useSelector(selectOrderForm);
  const orderStatus = useSelector(selectResponseOrderStatusData);

  const confirmOrderStatus = useMemo(
    () => orderStatus?.filter((el) => el.name === 'Подтвержденные'),
    [orderStatus],
  );

  useEffect(() => {
    dispatch(setOrderStatus(confirmOrderStatus[0]));
  }, [dispatch, confirmOrderStatus]);

  const handleFetchPostOrder = () => {
    dispatch(fetchAsyncPostOrder(orderForm));
    setIsBreadCrumbs(false);
  };

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
        handleFetchPostOrder={handleFetchPostOrder}
        // orderStatusValue={orderStatusValue}
        // orderForm={orderForm}
        // handleFetchPostOrderConfirm={handleFetchPostOrderConfirm}
        // handleFetchPostOrderCanceled={handleFetchPostOrderCanceled}
      />
    </div>
  );
};
export default OrderConfirm;
