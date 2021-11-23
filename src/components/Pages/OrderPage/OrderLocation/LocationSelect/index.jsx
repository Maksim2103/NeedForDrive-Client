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
    menu: (provided) => ({
      ...provided,
      width: 205,
      padding: 5,
    }),
    control: (provided) => ({
      ...provided,
      width: 205,
      cursor: 'pointer',
      border: 'none',
      borderRadius: 'none',
      borderBottom: '1px solid #e0e0e0',
      height: '20px',
      boxShadow: '0 0 0 1px white',
      ':hover': {
        ...styles[':hover'],
        borderColor: '#0ec261',
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    valueContainer: (provided) => ({
      ...provided,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: 14,
      lineHeight: '16px',
      padding: '0 8px',
    }),
    placeholder: (provided) => ({
      ...provided,
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: 14,
      lineHeight: '16px',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        padding: 10,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: 16,
        lineHeight: '16px',
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data.color
          : isFocused
          ? '#56d490'
          : undefined,
        color: isDisabled ? '#ccc' : isSelected ? '#0ec261' : 'black',
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? '#56d490'
              : '#56d490'
            : undefined,
        },
      };
    },
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
    // inputPointRef.current.clearValue();
    setPointLocation('');
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
          value={optionsCities?.filter(function (option) {
            return option.value === cityNameLocation;
          })}
          onChange={handleChangeCityName}
          options={optionsCities}
          isClearable
          placeholder="Начните вводить город..."
          // blurInputOnSelect
          controlShouldRenderValue
        />
      </div>
      <div className={styles.container__input}>
        <span className={styles.container__text}>Пункт выдачи</span>
        <Select
          styles={customStyles}
          value={optionsPoints?.filter(function (option) {
            return option.value === pointLocation;
          })}
          onChange={handleChangePoint}
          options={optionsPoints}
          isClearable
          placeholder={
            isPoints ? 'Начните вводить пункт...' : 'Нет доступных точек'
          }
          isDisabled={!isPoints}
          blurInputOnSelect
          ref={inputPointRef}
          controlShouldRenderValue
        />
      </div>
    </div>
  );
};

export default LocationSelect;
