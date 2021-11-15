import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCity,
  selectColor,
  selectIsFullTank,
  selectModel,
  selectPoint,
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
  const rentTime = '';
  const fullTank = useSelector(selectIsFullTank);
  const priceMin = '';
  const priceMax = '';

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
        {fullTank && <ItemList title="Полный бак" description={'да'} />}
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
