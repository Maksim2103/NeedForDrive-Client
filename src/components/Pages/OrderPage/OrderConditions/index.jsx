import React from 'react';
import MainButton from '../../../MainButton';
import ItemList from './ItemList';

import styles from './orderConditions.module.scss';

const OrderConditions = ({ data, price, buttonTitle, buttonLink }) => {
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
      <h3 className={styles.price}>{price}</h3>
      <MainButton
        buttonWidth="orderWidth"
        type="order"
        link={buttonLink}
        buttonTitle={buttonTitle}
      />
    </div>
  );
};

export default OrderConditions;
