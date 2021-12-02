import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCity,
  selectPoint,
  selectResponseCities,
  selectResponseCityLoadingStatus,
  selectResponsePoints,
  selectResponsePointsLoadingStatus,
  selectRoutingSteps,
} from '../../../../redux/reducers/orderSlice';
import {
  fetchAsyncGetCities,
  fetchAsyncGetCityCoordinates,
  fetchAsyncGetPoints,
} from '../../../../redux/thunks';
import OrderConditions from '../OrderConditions';
import LocationMap from './LocationMap';
import LocationSelect from './LocationSelect';
import Loader from '../../../../components/Loader/Loader';

import styles from './orderLocation.module.scss';

const buttonTitle = 'Выбрать модель';
const buttonLink = '/order/model';
const buttonType = 'order';

const OrderLocation = ({ setIsBreadCrumbs }) => {
  const dispatch = useDispatch();

  const cityName = useSelector(selectCity);
  const pointName = useSelector(selectPoint);

  const cityLoadingStatus = useSelector(selectResponseCityLoadingStatus);
  const pointsLoadingStatus = useSelector(selectResponsePointsLoadingStatus);

  const { stepOne } = useSelector(selectRoutingSteps);

  const cityResponseData = useSelector(selectResponseCities);
  const pointsResponseData = useSelector(selectResponsePoints);

  const pointAddress = `${cityName} ${pointName}`;

  useEffect(() => {
    if (!cityResponseData) dispatch(fetchAsyncGetCities());
  }, [dispatch, cityResponseData]);

  useEffect(() => {
    if (!pointsResponseData) dispatch(fetchAsyncGetPoints());
  }, [dispatch, pointsResponseData]);

  useEffect(() => {
    dispatch(fetchAsyncGetCityCoordinates(pointAddress));
  }, [dispatch, pointAddress]);

  return (
    <div className={styles.wrapper}>
      {cityLoadingStatus === 'succeeded' &&
      pointsLoadingStatus === 'succeeded' ? (
        <>
          <div className={styles.colLeft}>
            <LocationSelect />
            {cityName && (
              <>
                <p className={styles.text}>Выбрать на карте:</p> <LocationMap />
              </>
            )}
          </div>
          <div className={styles.colRight}>
            <OrderConditions
              buttonTitle={buttonTitle}
              buttonLink={buttonLink}
              type={buttonType}
              setIsBreadCrumbs={setIsBreadCrumbs}
              visibleStep={stepOne}
            />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default OrderLocation;
