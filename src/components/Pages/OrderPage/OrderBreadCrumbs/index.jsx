import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { selectRoutingSteps } from '../../../../redux/reducers/orderSlice';

import styles from './orderBreadCrumbs.module.scss';

const OrderBreadCrumbs = () => {
  const { stepOne, stepTwo, stepThree } = useSelector(selectRoutingSteps);
  const location = useLocation();

  const getUrl = (url) => {
    const id = location.pathname.match(/(\d|\w)*$/)[0];
    if (id && !/[A-Za-z]+$/.test(id)) return url + '/' + id;

    return url;
  };

  return (
    <div className={styles.orderBreadCrumbs}>
      <NavLink to={getUrl('/order/location')} activeClassName={styles.selected}>
        Местоположение
      </NavLink>
      {stepOne ? (
        <NavLink to={getUrl('/order/model')} activeClassName={styles.selected}>
          Модель
        </NavLink>
      ) : (
        <NavLink to="#" className={styles.disabledLink}>
          Модель
        </NavLink>
      )}
      {stepTwo ? (
        <NavLink
          to={getUrl('/order/options')}
          activeClassName={styles.selected}
        >
          Дополнительно
        </NavLink>
      ) : (
        <NavLink to="#" className={styles.disabledLink}>
          Дополнительно
        </NavLink>
      )}
      {stepThree ? (
        <NavLink to={getUrl('/order/total')} activeClassName={styles.selected}>
          Итого
        </NavLink>
      ) : (
        <NavLink to="#" className={styles.disabledLink}>
          Итого
        </NavLink>
      )}
    </div>
  );
};

export default OrderBreadCrumbs;
