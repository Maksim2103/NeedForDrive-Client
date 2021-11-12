import React from 'react';
import { useSelector } from 'react-redux';
import { selectOrderForm } from '../../../../redux/reducers/orderSlice';
import MainButton from '../../../MainButton';
import ItemList from './ItemList';

import styles from './orderConditions.module.scss';

const OrderConditions = ({
  data,
  // price,
  buttonTitle,
  buttonLink,
  type,
  setIsBreadCrumbs,
}) => {
  const { price } = useSelector(selectOrderForm);

  const handleChangeIsBreadCrumbs = () => {
    setIsBreadCrumbs(true);
  };
  return (
    <div>
      <h3 className={styles.title}>Ваш заказ:</h3>
      {data.map((el, index) => {
        return (
          <div key={index}>
            <ItemList
              title={el.title}
              description={el.description}
              doubleDescription={el.doubleDescription}
            />
          </div>
        );
      })}
      <h3 className={styles.price}>{`Цена: от ${price} до ${price} ₽`}</h3>
      <MainButton
        buttonWidth="orderWidth"
        type={type}
        link={buttonLink}
        buttonTitle={buttonTitle}
        onClick={handleChangeIsBreadCrumbs}
      />
    </div>
  );
};

export default OrderConditions;
