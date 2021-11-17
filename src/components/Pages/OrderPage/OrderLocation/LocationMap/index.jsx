import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';

import {
  selectCityCoordinate,
  selectPointsCoordinates,
} from '../../../../../redux/reducers/orderSlice';

import styles from './locationMap.module.scss';

const LocationMap = () => {
  const cityCoordinatesData = useSelector(selectCityCoordinate);
  const pointsCoordinatesData = useSelector(selectPointsCoordinates);

  const cityCoordinates = useMemo(
    () => cityCoordinatesData?.map((el) => Number(el)),
    [cityCoordinatesData],
  );

  const pointsCoordinates = useMemo(
    () => pointsCoordinatesData?.map((el) => el.map((el) => Number(el))),
    [pointsCoordinatesData],
  );

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
          {pointsCoordinates?.map((el, i) => (
            <Placemark key={i} geometry={el} options={{ cursor: 'none' }} />
          ))}
          <FullscreenControl options={{ float: 'right' }} />
          <ZoomControl options={{ position: 'top' }} />
        </Map>
      </YMaps>
    </div>
  );
};

export default LocationMap;
