import React from 'react';
import { useSelector } from 'react-redux';

import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';

import { selectCityCoordinate } from '../../../../../redux/reducers/orderSlice';

import styles from './locationMap.module.scss';

const LocationMap = () => {
  const responseCityCoordinates = useSelector(selectCityCoordinate);

  const cityCoordinates = responseCityCoordinates?.map((el) => Number(el));

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
          <Placemark geometry={[55.758493564040364, 37.61172907607578]} />
          <FullscreenControl options={{ float: 'right' }} />
          <ZoomControl options={{ position: 'top' }} />
        </Map>
      </YMaps>
    </div>
  );
};

export default LocationMap;
