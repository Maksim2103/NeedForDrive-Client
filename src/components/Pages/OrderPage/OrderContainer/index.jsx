import React, { useState } from 'react';

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
import OrderCompleted from '../OrderCompleted';

const OrderContainer = () => {
  const [isBreadCrumbs, setIsBreadCrumbs] = useState(true);

  console.log('isBreadCrumbs', isBreadCrumbs);
  return (
    <div className={styles.orderContainer}>
      <div className={styles.headerContainer}>
        <HeaderContent />
      </div>
      {isBreadCrumbs && (
        <div className={styles.orderBreadCrumbs}>
          <OrderBreadCrumbs />
        </div>
      )}
      <Switch>
        <Route
          exact
          path="/order/location"
          component={() => (
            <OrderLocation setIsBreadCrumbs={setIsBreadCrumbs} />
          )}
        />
        <Route
          exact
          path="/order/model"
          component={() => <OrderModel setIsBreadCrumbs={setIsBreadCrumbs} />}
        />
        <Route
          exact
          path="/order/options"
          component={() => <OrderOptions setIsBreadCrumbs={setIsBreadCrumbs} />}
        />
        <Route
          exact
          path="/order/total"
          component={() => <OrderTotal setIsBreadCrumbs={setIsBreadCrumbs} />}
        />
        <Route
          exact
          path="/order/confirm"
          component={() => <OrderConfirm setIsBreadCrumbs={setIsBreadCrumbs} />}
        />
        <Route
          exact
          path="/order/completed"
          component={() => (
            <OrderCompleted setIsBreadCrumbs={setIsBreadCrumbs} />
          )}
        />
        <Route exact path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default OrderContainer;
