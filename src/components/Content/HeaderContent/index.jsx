import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCity } from '../../../redux/reducers/orderSlice';

import styles from './headerContent.module.scss';

const HeaderContent = () => {
  const city = useSelector(selectCity);

  console.log('city', city);

  useEffect(() => {}, [selectCity]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Need for drive</p>
      {city && <p className={styles.text}>{city}</p>}
    </div>
  );
};

export default HeaderContent;
