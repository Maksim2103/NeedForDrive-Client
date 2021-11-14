import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';

import {
  selectCityCoordinate,
  selectFilteredPoints,
  selectPointsCoordinates,
} from '../../../../../redux/reducers/orderSlice';
import { fetchAsyncGetPointsCoordinates } from '../../../../../redux/thunks';

import styles from './locationMap.module.scss';

const LocationMap = () => {
  const dispatch = useDispatch();
  const cityCoordinatesData = useSelector(selectCityCoordinate);
  const filteredPointsData = useSelector(selectFilteredPoints);
  const pointsCoordinatesData = useSelector(selectPointsCoordinates);

  const cityCoordinates = cityCoordinatesData?.map((el) => Number(el));
  const pointsCoordinates = pointsCoordinatesData?.map((el) => Number(el));

  useEffect(() => {
    dispatch(fetchAsyncGetPointsCoordinates(filteredPointsData));
  }, [dispatch, filteredPointsData]);

  return (
    <div className={styles.mapContainer}>
      <YMaps>
        <Map
          width="100%"
          height="100%"
          state={{
            center: cityCoordinates,
            zoom: 12,
          }}
        >
          {pointsCoordinates?.map((el) => (
            <Placemark geometry={el} />
          ))}
          <FullscreenControl options={{ float: 'right' }} />
          <ZoomControl options={{ position: 'top' }} />
        </Map>
      </YMaps>
    </div>
  );
};

export default LocationMap;
