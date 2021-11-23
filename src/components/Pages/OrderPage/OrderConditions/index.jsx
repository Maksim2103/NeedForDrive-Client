import React, { useEffect, useMemo, useState } from 'react';
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
  selectRateName,
  selectRatePrice,
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
  const rateName = useSelector(selectRateName);
  const ratePrice = useSelector(selectRatePrice);
  const dateFrom = useSelector(selectDateFrom);
  const dateTo = useSelector(selectDateTo);
  const isFullTank = useSelector(selectIsFullTank);
  const isChildChair = useSelector(selectIsNeedChildChair);
  const isRightWheel = useSelector(selectIsRightWheel);
  const priceMin = useSelector(selectPriceMin);
  const priceMax = useSelector(selectPriceMax);

  const [dateValue, setDateValue] = useState({});

  const {
    monthValue,
    weeksValue,
    daysValue,
    hoursValue,
    minutesValue,
    totalMinutes,
  } = dateValue;

  useEffect(() => {
    const duration = dateTo - dateFrom;
    const totalMinutes = Math.floor(duration / (1000 * 60));
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

    setDateValue({
      monthValue,
      weeksValue,
      daysValue,
      hoursValue,
      minutesValue,
      totalMinutes,
    });
  }, [dateTo, dateFrom]);

  const rentTime = useMemo(
    () =>
      `${monthValue}м ${weeksValue}д ${daysValue}д ${hoursValue}ч ${minutesValue}м`,
    [monthValue, weeksValue, daysValue, hoursValue, minutesValue],
  );

  const price = useMemo(() => {
    if (dateTo && dateFrom)
      switch (rateName) {
        case 'Поминутно':
          return totalMinutes * ratePrice;
        case 'Суточный':
          return Math.ceil(totalMinutes / 60 / 24) * ratePrice;
        case 'Недельный (Акция!)':
          return Math.ceil(totalMinutes / 60 / 24 / 7) * ratePrice;
        case 'Месячный':
          return Math.ceil(totalMinutes / 60 / 24 / 30) * ratePrice;
        default:
          break;
      }
  }, [rateName, ratePrice, totalMinutes, dateTo, dateFrom]);

  const displayIndications = cityName && pointName;

  return (
    <div>
      {displayIndications && (
        <>
          <h3 className={styles.title}>Ваш заказ:</h3>
          <div className={styles.conditionsWrapper}>
            {cityName && pointName && (
              <ItemList
                title="Пункт выдачи"
                description={cityName}
                doubleDescription={pointName}
              />
            )}
            {model && <ItemList title="Модель" description={model} />}
            {color && <ItemList title="Цвет" description={color} />}
            {rentTime && dateTo && dateFrom && (
              <ItemList title="Длительность аренды" description={rentTime} />
            )}
            {rateName && <ItemList title="Тариф" description={rateName} />}
            {isFullTank && <ItemList title="Полный бак" description={'да'} />}
            {isChildChair && (
              <ItemList title="Детское кресло" description={'да'} />
            )}
            {isRightWheel && (
              <ItemList title="Правый руль" description={'да'} />
            )}
          </div>
          {price ? (
            <h3 className={styles.price}>{`Цена: ${price} ₽`}</h3>
          ) : (
            priceMin &&
            priceMax && (
              <h3
                className={styles.price}
              >{`Цена: от ${priceMin} до ${priceMax} ₽`}</h3>
            )
          )}
          <MainButton
            buttonWidth="orderWidth"
            type={type}
            link={buttonLink}
            buttonTitle={buttonTitle}
            onClick={() => setIsBreadCrumbs(true)}
          />
        </>
      )}
    </div>
  );
};

export default OrderConditions;
