import React from 'react';

import { NavLink } from 'react-router-dom';
import TriangularSeparator from '../../../TriangularSeparator';

import styles from './orderBreadCrumbs.module.scss';

const OrderBreadCrumbs = () => {
  return (
    <div className={styles.orderBreadCrumbs}>
      <NavLink to="">Местоположение</NavLink>
      <TriangularSeparator />
      <NavLink to="">Модель</NavLink>
      <TriangularSeparator />
      <NavLink to="">Дополнительно</NavLink>
      <TriangularSeparator />
      <NavLink to="">Итого</NavLink>
    </div>
  );
};

export default OrderBreadCrumbs;
