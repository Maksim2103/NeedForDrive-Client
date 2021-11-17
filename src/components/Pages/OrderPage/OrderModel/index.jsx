import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectResponseCarsStatus } from '../../../../redux/reducers/orderSlice';
import { fetchAsyncGetCars } from '../../../../redux/thunks';
import OrderConditions from '../OrderConditions';
import ModelList from './ModelList';
import ModelSelect from './ModelSelect';

import styles from './orderModel.module.scss';

const buttonTitle = 'Дополнительно';
const buttonLink = '/order/options';
const buttonType = 'order';

const OrderModel = ({ setIsBreadCrumbs }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectResponseCarsStatus);

  useEffect(() => {
    dispatch(fetchAsyncGetCars());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      {isLoading === 'succeeded' ? (
        <>
          <div className={styles.colLeft}>
            <ModelSelect />
            <ModelList />
          </div>
          <div className={styles.colRight}>
            <OrderConditions
              buttonTitle={buttonTitle}
              buttonLink={buttonLink}
              type={buttonType}
              setIsBreadCrumbs={setIsBreadCrumbs}
            />
          </div>
        </>
      ) : (
        'Пожалуйста, подождите, данные загружаются...'
      )}
    </div>
  );
};
export default OrderModel;
