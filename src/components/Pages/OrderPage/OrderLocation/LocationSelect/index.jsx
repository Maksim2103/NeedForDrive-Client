import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectResponseCities,
  selectResponsePoints,
  setPoint,
  setCityName,
  setResetPointsCoordinates,
} from '../../../../../redux/reducers/orderSlice';
import { fetchAsyncGetPointsCoordinates } from '../../../../../redux/thunks';

import styles from './locationSelect.module.scss';

const LocationSelect = () => {
  const dispatch = useDispatch();

  const citiesData = useSelector(selectResponseCities);
  const pointsData = useSelector(selectResponsePoints);

  const state = useSelector((state) => state);

  const {
    orderPage: {
      orderForm: {
        cityId: { name },
        pointId: { address },
      },
    },
  } = state;

  const [cityNameLocation, setCityNameLocation] = useState(name);
  const [pointLocation, setPointLocation] = useState(address);

  const handleChangeCityName = (e) => {
    const value = e.target.value;
    setCityNameLocation(value);
    dispatch(setCityName(value));
  };

  const handleChangePoint = (e) => {
    const value = e.target.value;
    setPointLocation(value);
    dispatch(setPoint(value));
  };

  const handleResetCityValue = () => {
    setCityNameLocation('');
    dispatch(setCityName(''));
    handleResetPoint();
    dispatch(setResetPointsCoordinates([]));
  };

  const handleResetPoint = () => {
    setPointLocation('');
    dispatch(setPoint(''));
  };

  const filteredPointsData = useMemo(
    () => pointsData?.filter((el) => el.cityId?.name === cityNameLocation),
    [pointsData, cityNameLocation],
  );

  useEffect(
    () =>
      filteredPointsData?.forEach((el) => {
        const address = `${el.cityId.name} ${el.address}`;
        dispatch(fetchAsyncGetPointsCoordinates(address));
      }),
    [dispatch, filteredPointsData],
  );

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
          {citiesData?.map((el) => {
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
          value={pointLocation}
          onChange={handleChangePoint}
        />
        <datalist id="points">
          {filteredPointsData?.map((el) => {
            return <option value={el.address} key={el.id}></option>;
          })}
        </datalist>
        {pointLocation && (
          <button
            className={styles.container__button_points}
            onClick={handleResetPoint}
          ></button>
        )}
      </div>
    </div>
  );
};

export default LocationSelect;
