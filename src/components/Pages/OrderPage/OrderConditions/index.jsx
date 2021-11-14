import React from 'react';
import { useSelector } from 'react-redux';
import { selectOrderForm } from '../../../../redux/reducers/orderSlice';
import MainButton from '../../../MainButton';
import ItemList from './ItemList';

import styles from './orderConditions.module.scss';

const OrderConditions = ({
  data,
  buttonTitle,
  buttonLink,
  type,
  setIsBreadCrumbs,
}) => {
  const { price } = useSelector(selectOrderForm);

  console.log(`data`, data);

  const cityName = data.cityId.name;
  const pointName = data.poindId?.address;

  return (
    <div>
      <h3 className={styles.title}>Ваш заказ:</h3>
      <div>
        <ItemList
          title="Пункт выдачи"
          description={cityName}
          doubleDescription={pointName}
        />
        <ItemList title="Модель" description="вавав" />
        <ItemList title="Цвет" description="вавав" />
        <ItemList title="Длительность аренды" description="вавав" />
        <ItemList title="Тариф" description="вавав" />
        <ItemList title="Полный бак" description="вавав" />
      </div>
      <h3 className={styles.price}>{`Цена: от ${price} до ${price} ₽`}</h3>
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
