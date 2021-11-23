import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './orderBreadCrumbs.module.scss';

const OrderBreadCrumbs = ({ step1, step2, step3, step4 }) => {
  return (
    <div className={styles.orderBreadCrumbs}>
      <NavLink to="/order/location" activeClassName={styles.selected}>
        Местоположение
      </NavLink>
      {step1 ? (
        <NavLink to="/order/model" activeClassName={styles.selected}>
          Модель
        </NavLink>
      ) : (
        <NavLink to="#" className={styles.disabledLink}>
          Модель
        </NavLink>
      )}
      {step2 ? (
        <NavLink to="/order/options" activeClassName={styles.selected}>
          Дополнительно
        </NavLink>
      ) : (
        <NavLink to="#" className={styles.disabledLink}>
          Дополнительно
        </NavLink>
      )}
      {step3 ? (
        <NavLink to="/order/total" activeClassName={styles.selected}>
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
