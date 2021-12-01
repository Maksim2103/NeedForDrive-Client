import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  setPrice,
} from '../../../../redux/reducers/orderSlice';
import MainButton from '../../../MainButton';
import ItemList from './ItemList';

import styles from './orderConditions.module.scss';

const OrderConditions = ({
  buttonTitle,
  buttonLink,
  type,
  handleClick,
  visibleStep,
}) => {
  const dispatch = useDispatch();

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
    const hoursValue = hours;
    const minutesValue = minutes;
    setDateValue({
      monthValue,
      weeksValue,
      daysValue,
      hoursValue,
      minutesValue,
      totalMinutes,
    });
  }, [dateTo, dateFrom]);

  const rentTime = useMemo(() => {
    const months = monthValue ? monthValue + 'м ' : '';
    const week = weeksValue ? weeksValue + 'н ' : '';
    const days = daysValue ? daysValue + 'д ' : '';
    const hours = hoursValue ? hoursValue + 'ч ' : '';
    const minutes = minutesValue ? minutesValue + 'м' : '';

    return `${months}${week}${days}${hours}${minutes}`;
  }, [monthValue, weeksValue, daysValue, hoursValue, minutesValue]);

  const optionsPrice = useMemo(
    () => (isFullTank && 500) + (isChildChair && 200) + (isRightWheel && 1600),
    [isFullTank, isChildChair, isRightWheel],
  );

  const price = useMemo(() => {
    if (dateTo && dateFrom)
      switch (rateName) {
        case 'Поминутно':
          const totalPrice = totalMinutes * ratePrice + optionsPrice;
          if (totalPrice > priceMin && totalPrice < priceMax) {
            return totalPrice;
          }
          if (totalPrice > priceMax) {
            return priceMax;
          }
          if (totalPrice < priceMin) {
            return priceMin;
          }
          break;
        case 'Суточный':
          const totalPriceDays =
            Math.ceil(totalMinutes / 60 / 24) * ratePrice + optionsPrice;
          if (totalPriceDays > priceMin && totalPriceDays < priceMax) {
            return totalPriceDays;
          }
          if (totalPriceDays > priceMax) {
            return priceMax;
          }
          if (totalPriceDays < priceMin) {
            return priceMin;
          }
          break;
        case 'Недельный (Акция!)':
          const totalPriceWeeks =
            Math.ceil(totalMinutes / 60 / 24 / 7) * ratePrice + optionsPrice;
          if (totalPriceWeeks > priceMin && totalPriceWeeks < priceMax) {
            return totalPriceWeeks;
          }
          if (totalPriceWeeks > priceMax) {
            return priceMax;
          }
          if (totalPriceWeeks < priceMin) {
            return priceMin;
          }
          break;
        case 'Месячный':
          const totalPriceMonth =
            Math.ceil(totalMinutes / 60 / 24 / 30) * ratePrice + optionsPrice;
          if (totalPriceMonth > priceMin && totalPriceMonth < priceMax) {
            return totalPriceMonth;
          }
          if (totalPriceMonth > priceMax) {
            return priceMax;
          }
          if (totalPriceMonth < priceMin) {
            return priceMin;
          }
          break;
        default:
          break;
      }
  }, [
    rateName,
    ratePrice,
    totalMinutes,
    dateTo,
    dateFrom,
    optionsPrice,
    priceMax,
    priceMin,
  ]);

  useEffect(() => {
    dateTo && dateFrom && dispatch(setPrice(price));
  }, [dispatch, price, dateTo, dateFrom]);

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
            onClick={handleClick}
            visibleStep={visibleStep}
          />
        </>
      )}
    </div>
  );
};

export default OrderConditions;
