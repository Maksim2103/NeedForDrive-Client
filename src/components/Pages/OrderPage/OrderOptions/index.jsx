import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectResponseRateData } from '../../../../redux/reducers/orderSlice';
import { fetchAsyncGetRate } from '../../../../redux/thunks';
import OrderConditions from '../OrderConditions';
import OptionsSelect from './OptionsSelect';

import styles from './orderOptions.module.scss';

const buttonTitle = 'Итого';
const buttonLink = '/order/total';
const buttonType = 'order';

const OrderOptions = ({ setIsBreadCrumbs, isRoute }) => {
  const dispatch = useDispatch();

  const rateResponse = useSelector(selectResponseRateData);

  useEffect(() => {
    if (!rateResponse) dispatch(fetchAsyncGetRate());
  }, [dispatch, rateResponse]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.colLeft}>
        <OptionsSelect />
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
export default OrderOptions;
