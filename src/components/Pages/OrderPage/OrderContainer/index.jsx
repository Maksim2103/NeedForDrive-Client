import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HeaderContent from '../../../Content/HeaderContent';
import OrderBreadCrumbs from '../OrderBreadCrumbs';

import NotFoundPage from '../../NotFoundPage';
import OrderLocation from '../OrderLocation';
import OrderModel from '../OrderModel';
import OrderOptions from '../OrderOptions';

import styles from './orderContainer.module.scss';
import OrderTotal from '../OrderTotal';
import OrderConfirm from '../OrderConfirm';

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
        <Route exact path="/order/options" component={OrderOptions} />
        <Route exact path="/order/total" component={OrderTotal} />
        <Route exact path="/order/confirm" component={OrderConfirm} />
        <Route exact path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default OrderContainer;