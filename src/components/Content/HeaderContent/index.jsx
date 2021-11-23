import React from 'react';
import { useSelector } from 'react-redux';
import { selectCity } from '../../../redux/reducers/orderSlice';

import styles from './headerContent.module.scss';

const HeaderContent = ({ wrapperClassName }) => {
  const city = useSelector(selectCity);

  return (
    <div className={wrapperClassName ? styles.wrapper : styles.wrapperMainPage}>
      <p className={styles.title}>Need for drive</p>
      {city && <p className={styles.text}>{city}</p>}
    </div>
  );
};

export default HeaderContent;
