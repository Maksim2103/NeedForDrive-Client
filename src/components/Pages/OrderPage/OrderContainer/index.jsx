import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HeaderContent from '../../../Content/HeaderContent';
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
      <Router>
        <Switch>
          <Route exact path="/order" component={OrderLocation} />
          <Route exact path="/order/model/" component={OrderModel} />
        </Switch>
      </Router>
    </div>
  );
};

export default OrderContainer;
