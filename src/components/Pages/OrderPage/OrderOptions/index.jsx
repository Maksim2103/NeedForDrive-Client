import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  selectResponseRateData,
  selectRoutingSteps,
} from '../../../../redux/reducers/orderSlice';
import { fetchAsyncGetRate } from '../../../../redux/thunks';
import OrderConditions from '../OrderConditions';
import OptionsSelect from './OptionsSelect';

import styles from './orderOptions.module.scss';

const buttonTitle = 'Итого';
const buttonLink = '/order/total';
const buttonType = 'order';

const OrderOptions = ({ setIsBreadCrumbs }) => {
  const dispatch = useDispatch();

  const rateResponse = useSelector(selectResponseRateData);

  const { stepThree } = useSelector(selectRoutingSteps);

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
          visibleStep={stepThree}
        />
      </div>
    </div>
  );
};
export default OrderOptions;
