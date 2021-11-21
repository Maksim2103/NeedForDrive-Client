import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCity,
  selectColor,
  selectDateFrom,
  selectDateTo,
  selectIsFullTank,
  selectIsNeedChildChair,
  selectIsRightWheel,
  selectModel,
  selectPoint,
  selectPriceMax,
  selectPriceMin,
  selectRate,
} from '../../../../redux/reducers/orderSlice';
import MainButton from '../../../MainButton';
import ItemList from './ItemList';

import styles from './orderConditions.module.scss';

const OrderConditions = ({
  buttonTitle,
  buttonLink,
  type,
  setIsBreadCrumbs,
}) => {
  const cityName = useSelector(selectCity);
  const pointName = useSelector(selectPoint);
  const model = useSelector(selectModel);
  const color = useSelector(selectColor);
  const rate = useSelector(selectRate);
  const dateFrom = useSelector(selectDateFrom);
  const dateTo = useSelector(selectDateTo);
  const isFullTank = useSelector(selectIsFullTank);
  const isChildChair = useSelector(selectIsNeedChildChair);
  const isRightWheel = useSelector(selectIsRightWheel);
  const priceMin = useSelector(selectPriceMin);
  const priceMax = useSelector(selectPriceMax);

  const [monthValue, setMonthValue] = useState('');
  const [weeksValue, setWeekValue] = useState('');
  const [daysValue, setDayValue] = useState('');
  const [hoursValue, setHoursValue] = useState('');
  const [minutesValue, setMinutesValue] = useState('');

  const time = (duration) => {
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const weeks = Math.floor((duration / (1000 * 60 * 60 * 24 * 7)) % 7);
    const month = Math.floor((duration / (1000 * 60 * 60 * 24 * 30)) % 30);

    const monthValue = month > 11 ? '0' : month;
    const weeksValue = weeks > 4 ? '0' : weeks;
    const daysValue = days > 29 ? '0' : days;
    const hoursValue = hours < 10 ? '0' + hours : hours;
    const minutesValue = minutes < 10 ? '0' + minutes : minutes;

    setMonthValue(monthValue);
    setWeekValue(weeksValue);
    setDayValue(daysValue);
    setHoursValue(hoursValue);
    setMinutesValue(minutesValue);

    return `${monthValue}м ${weeksValue}д ${daysValue}д ${hoursValue}ч ${minutesValue}м`;
  };
  console.log(`monthValue`, monthValue);
  console.log(`monthValue`, weeksValue);
  console.log(`monthValue`, daysValue);
  console.log(`monthValue`, hoursValue);
  console.log(`monthValue`, minutesValue);

  const rentTime = useMemo(() => time(dateTo - dateFrom), [dateTo, dateFrom]);

  // const price =

  return (
    <div>
      <h3 className={styles.title}>Ваш заказ:</h3>
      <div>
        {cityName && pointName && (
          <ItemList
            title="Пункт выдачи"
            description={cityName}
            doubleDescription={pointName}
          />
        )}
        {model && <ItemList title="Модель" description={model} />}
        {color && <ItemList title="Цвет" description={color} />}
        {rentTime && (
          <ItemList title="Длительность аренды" description={rentTime} />
        )}
        {rate && <ItemList title="Тариф" description={rate} />}
        {isFullTank && <ItemList title="Полный бак" description={'да'} />}
        {isChildChair && <ItemList title="Детское кресло" description={'да'} />}
        {isRightWheel && <ItemList title="Правый руль" description={'да'} />}
      </div>
      {priceMin && priceMax && (
        <h3
          className={styles.price}
        >{`Цена: от ${priceMin} до ${priceMax} ₽`}</h3>
      )}
      <MainButton
        buttonWidth="orderWidth"
        type={type}
        link={buttonLink}
        buttonTitle={buttonTitle}
        onClick={() => setIsBreadCrumbs(true)}
      />
    </div>
  );
};

export default OrderConditions;
