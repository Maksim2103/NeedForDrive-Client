import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAsyncGetCities,
  fetchAsyncGetCityCoordinates,
  fetchAsyncGetPoints,
} from '../../../../redux/thunks';
import OrderConditions from '../OrderConditions';
import LocationMap from './LocationMap';
import LocationSelect from './LocationSelect';

import styles from './orderLocation.module.scss';

const buttonTitle = 'Выбрать модель';
const buttonLink = '/order/model';
const buttonType = 'order';

const OrderLocation = ({ setIsBreadCrumbs }) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const {
    orderPage: {
      orderForm: {
        cityId: { name },
        pointId: { address },
      },
    },
  } = state;

  const pointAddress = `${name} ${address}`;

  useEffect(() => {
    dispatch(fetchAsyncGetCities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAsyncGetPoints());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAsyncGetCityCoordinates(pointAddress));
  }, [dispatch, pointAddress]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.colLeft}>
        <LocationSelect />
        <p className={styles.text}>Выбрать на карте:</p>
        <LocationMap />
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
export default OrderLocation;
