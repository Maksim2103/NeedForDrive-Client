import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCity,
  selectColor,
  selectIsFullTank,
  selectModel,
  selectPoint,
  selectPriceMax,
  selectPriceMin,
  selectRate,
} from '../../../../redux/reducers/orderSlice';
import MainButton from '../../../MainButton';
import ItemList from '../OrderConditions/ItemList';

import styles from './orderConditionsMobile.module.scss';

const OrderConditionsMobile = ({
  buttonTitle,
  buttonLink,
  type,
  setIsBreadCrumbs,
  visible,
  onClose,
}) => {
  const cityName = useSelector(selectCity);
  const pointName = useSelector(selectPoint);
  const model = useSelector(selectModel);
  const color = useSelector(selectColor);
  const rate = useSelector(selectRate);
  const rentTime = '';
  const fullTank = useSelector(selectIsFullTank);
  const priceMin = useSelector(selectPriceMin);
  const priceMax = useSelector(selectPriceMax);

  const displayIndications = cityName && pointName;

  if (!visible) return null;

  return (
    <div>
      {displayIndications && (
        <div className="modal" onClick={onClose}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
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
                {rentTime && (
                  <ItemList
                    title="Длительность аренды"
                    description={rentTime}
                  />
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
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConditionsMobile;
