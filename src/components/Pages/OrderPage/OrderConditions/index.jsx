import React from 'react';
import { useSelector } from 'react-redux';
import { selectOrderForm } from '../../../../redux/reducers/orderSlice';
import MainButton from '../../../MainButton';
import ItemList from './ItemList';

import styles from './orderConditions.module.scss';

const OrderConditions = ({
  buttonTitle,
  buttonLink,
  type,
  setIsBreadCrumbs,
}) => {

  const data = useSelector(selectOrderForm);

  const cityName = data.cityId?.name;
  const pointName = data.pointId?.address;
  const model = data.carId?.name;
  const color = data.carId?.color;
  const rentTime = '';
  const rate = data?.rateId.name;
  const fullTank = data?.isFillTank;
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
