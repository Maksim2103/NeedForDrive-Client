import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncGetRate } from '../../../../redux/thunks';
import OrderConditions from '../OrderConditions';
import OptionsSelect from './OptionsSelect';

import styles from './orderOptions.module.scss';

const buttonTitle = 'Итого';
const buttonLink = '/order/total';
const buttonType = 'order';

const OrderOptions = ({ setIsBreadCrumbs }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncGetRate());
  }, [dispatch]);

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
        />
      </div>
    </div>
  );
};
export default OrderOptions;
