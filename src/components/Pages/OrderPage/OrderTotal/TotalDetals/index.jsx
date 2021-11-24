import React from 'react';

import styles from './totalDetails.module.scss';

import { useSelector } from 'react-redux';
import { selectCarImage } from '../../../../../redux/reducers/orderSlice';

const TotalDetails = () => {
  const img = useSelector(selectCarImage);
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h3 className={styles.model}>Hyndai, i30 N</h3>
        <h3 className={styles.number}>K 761 HA 73</h3>
        <h3 className={styles.fuel}>
          <span>Топливо</span>100%
        </h3>
        <h3 className={styles.date}>
          <span>Доступна с</span>12.06.2019 12:00
        </h3>
      </div>
      <div>
        <img
          className={styles.image}
          alt="Car_Photo "
          src={img}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://pixy.org/src/38/386334.png';
          }}
        />
      </div>
    </div>
  );
};
export default TotalDetails;
