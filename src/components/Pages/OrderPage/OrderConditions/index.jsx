import React from 'react';
import MainButton from '../../../MainButton';
import ItemList from './ItemList';

import styles from './orderConditions.module.scss';

const OrderConditions = ({ data }) => {
  return (
    <div>
      <h3 className={styles.title}>Ваш заказ:</h3>
      {data.map((el) => {
        return (
          <div key={Math.random()}>
            <ItemList
              title={el.title}
              description={el.description}
              doubleDescription={el.doubleDescription}
            />
          </div>
        );
      })}
      <h3 className={styles.price}>Цена: от 8 000 до 12 000 ₽</h3>
      <MainButton
        buttonWidth="orderWidth"
        buttonText="Выбрать модель"
        type="order"
        link="/order/model"
      />
    </div>
  );
};

export default OrderConditions;
