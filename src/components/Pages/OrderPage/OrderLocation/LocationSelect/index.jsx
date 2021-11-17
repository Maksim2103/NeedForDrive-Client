import React, { useEffect, useMemo, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import {
  selectResponseCities,
  selectResponsePoints,
  setPoint,
  setCityName,
  setResetCityAndPointValues,
  selectPoint,
  selectCity,
} from '../../../../../redux/reducers/orderSlice';
import { fetchAsyncGetPointsCoordinates } from '../../../../../redux/thunks';

import styles from './locationSelect.module.scss';

const LocationSelect = () => {
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: 205,
      padding: 5,
    }),

    control: (provided) => ({
      ...provided,
      width: 205,
      border: 'none',
      borderRadius: 'none',
      borderBottom: '1px solid #e0e0e0',
      height: '20px',
    }),

    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none',
    }),

    dropdownIndicator: (provided, state) => ({
      ...provided,
      display: 'none',
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: 14,
      lineHeight: '16px',
      padding: '0 8px',
    }),

    placeholder: (provided, state) => ({
      ...provided,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: 14,
      lineHeight: '16px',
    }),
  };

  const dispatch = useDispatch();

  const inputPointRef = useRef(null);

  const citiesData = useSelector(selectResponseCities);
  const pointsData = useSelector(selectResponsePoints);

  const cityName = useSelector(selectCity);
  const pointName = useSelector(selectPoint);

  const [cityNameLocation, setCityNameLocation] = useState(cityName);
  const [pointLocation, setPointLocation] = useState(pointName);

  const handleResetCityAndPointValue = () => {
    setCityNameLocation('');
    setPointLocation('');
    dispatch(setPoint(''));
    dispatch(setResetCityAndPointValues());
  };

  const handleChangeCityName = (val, { action }) => {
    inputPointRef.current.clearValue();
    if (action === 'clear') {
      handleResetCityAndPointValue();
      return;
    }
    const value = val.value;
    setCityNameLocation(value);
    dispatch(setCityName(value));
  };

  const handleChangePoint = (val, { action }) => {
    if (action === 'clear') {
      setPointLocation('');
      dispatch(setPoint(''));
      return;
    }
    const value = val.value;
    setPointLocation(value);
    dispatch(setPoint(value));
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

  const isPoints = filteredPointsData?.length !== 0;

  const optionsCities = citiesData?.map((el) => {
    return { value: el.name, label: el.name };
  });

  const optionsPoints = filteredPointsData?.map((el) => {
    return { value: el.address, label: el.address };
  });

  return (
    <div className={styles.container}>
      <div className={styles.container__input}>
        <span className={styles.container__text}>Город</span>
        <Select
          styles={customStyles}
          defaultInputValue={cityNameLocation}
          onChange={handleChangeCityName}
          options={optionsCities}
          isClearable
          placeholder="Начните вводить город..."
          blurInputOnSelect
        />
      </div>
      <div className={styles.container__input}>
        <span className={styles.container__text}>Пункт выдачи</span>
        <Select
          styles={customStyles}
          defaultInputValue={pointLocation}
          onChange={handleChangePoint}
          options={optionsPoints}
          isClearable
          placeholder={
            isPoints ? 'Начните вводить пункт...' : 'Нет доступных точек'
          }
          isDisabled={!isPoints}
          blurInputOnSelect
          ref={inputPointRef}
        />
      </div>
    </div>
  );
};

export default LocationSelect;
