import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectResponseCities,
  setCityId,
  setCityName,
} from '../../../../../redux/reducers/orderSlice';

import styles from './locationSelect.module.scss';

const LocationSelect = () => {
  const cities = useSelector(selectResponseCities);
  console.log(`cities`, cities);
  const city = useSelector(setCityName);

  const dispatch = useDispatch();

  const [cityNameLocation, setCityNameLocation] = useState('');
  const [cityIdLocation, setCityIdLocation] = useState('');

  console.log(`cityNameLocation1`, cityNameLocation);

  // useEffect(() => {
  //   dispatch(setCityName(cityNameLocation));
  // }, [cityNameLocation]);

  // useEffect(() => {
  //   dispatch(setCityId(cityIdLocation));
  // }, [cityIdLocation]);

  // useEffect(() => {
  //   getIdFromCityName(cityNameLocation);
  // }, [cityNameLocation]);

  const getIdFromCityName = (city) => {
    const id = cities?.filter((el) => {
      if (el.name === city) {
        return el;
      }
    });
    return id;
  };

  const idd = getIdFromCityName(cityNameLocation);

  console.log(`idd`, idd);

  const handleChangeCityName = (e) => {
    const value = e.target.value;
    setCityNameLocation(value);
    dispatch(setCityName(value));
  };

  const handleResetCityValue = () => {
    setCityNameLocation('');
    setCityName('');
  };

  const handleResetCityIdValue = () => {
    setCityIdLocation('');
    setCityId('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__input}>
        <span>Город</span>
        <input
          type="text"
          list="cities"
          placeholder="Начните вводить город..."
          value={cityNameLocation}
          onChange={handleChangeCityName}
        />
        <datalist id="cities">
          {cities?.map((el) => {
            return <option value={el.name} key={el.id}></option>;
          })}
        </datalist>
        {cityNameLocation && (
          <button
            className={styles.container__button}
            onClick={handleResetCityValue}
          ></button>
        )}
      </div>
      <div className={styles.container__input}>
        <span>Пункт выдачи</span>
        <input
          type="text"
          list="points"
          placeholder="Начните вводить пункт..."
        />
        <datalist id="points">
          {cities?.map((el) => {
            return <option value={el.name} key={el.id}></option>;
          })}
        </datalist>
        {cityIdLocation && (
          <button
            className={styles.container__button_points}
            onClick={handleResetCityIdValue}
          ></button>
        )}
      </div>
    </div>
  );
};

export default LocationSelect;
