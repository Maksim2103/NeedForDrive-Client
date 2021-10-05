import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './orderBreadCrumbs.module.scss';

const OrderBreadCrumbs = () => {
  return (
    <div className={styles.orderBreadCrumbs}>
      <NavLink to="/order/location" activeClassName={styles.selected}>
        Местоположение
      </NavLink>
      <NavLink to="/order/model" activeClassName={styles.selected}>
        Модель
      </NavLink>
      <NavLink to="/order/options" activeClassName={styles.selected}>
        Дополнительно
      </NavLink>
      <NavLink to="/order/total" activeClassName={styles.selected}>
        Итого
      </NavLink>
    </div>
  );
};

export default OrderBreadCrumbs;
