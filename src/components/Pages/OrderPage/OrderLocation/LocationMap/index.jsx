import React from 'react';

import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';

import styles from './locationMap.module.scss';

const mapState = {
  center: [54.31892202233214, 48.3782782055664],
  zoom: 12,
};

const LocationMap = () => {
  return (
    <div className={styles.mapContainer}>
      <YMaps>
        <Map width="100%" height="100%" state={mapState}>
          <Placemark geometry={[54.31892202233214, 48.3782782055664]} />
          <Placemark geometry={[54.30629761699906, 48.35947168820495]} />
          <Placemark geometry={[54.308054333402694, 48.376895317965705]} />
          <Placemark geometry={[54.29967160884956, 48.38264597409364]} />
          <FullscreenControl options={{ float: 'right' }} />
          <ZoomControl options={{ position: 'top' }} />
        </Map>
      </YMaps>
    </div>
  );
};

export default LocationMap;
