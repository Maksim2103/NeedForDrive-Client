import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HeaderContent from '../../../Content/HeaderContent';
import NotFoundPage from '../../NotFoundPage';
import OrderBreadCrumbs from '../OrderBreadCrumbs';
import OrderLocation from '../OrderLocation';
import OrderModel from '../OrderModel';

import styles from './orderContainer.module.scss';

const OrderContainer = () => {
  return (
    <div className={styles.orderContainer}>
      <div className={styles.headerContainer}>
        <HeaderContent />
      </div>
      <div className={styles.orderBreadCrumbs}>
        <OrderBreadCrumbs />
      </div>
      <Switch>
        <Route exact path="/order/location" component={OrderLocation} />
        <Route exact path="/order/model" component={OrderModel} />
        <Route exact path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default OrderContainer;
