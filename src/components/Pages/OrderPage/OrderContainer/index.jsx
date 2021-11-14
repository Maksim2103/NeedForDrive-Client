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
import { useSelector } from 'react-redux';
import { selectOrderForm } from '../../../../redux/reducers/orderSlice';

const OrderContainer = () => {
  const orderFormData = useSelector(selectOrderForm);
  const [isBreadCrumbs, setIsBreadCrumbs] = useState(true);

  console.log(`orderFormData`, orderFormData);

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
            <OrderLocation
              setIsBreadCrumbs={setIsBreadCrumbs}
              data={orderFormData}
            />
          )}
        />
        <Route
          exact
          path="/order/model"
          component={() => (
            <OrderModel
              setIsBreadCrumbs={setIsBreadCrumbs}
              data={orderFormData}
            />
          )}
        />
        <Route
          exact
          path="/order/options"
          component={() => (
            <OrderOptions
              setIsBreadCrumbs={setIsBreadCrumbs}
              data={orderFormData}
            />
          )}
        />
        <Route
          exact
          path="/order/total"
          component={() => (
            <OrderTotal
              setIsBreadCrumbs={setIsBreadCrumbs}
              data={orderFormData}
            />
          )}
        />
        <Route
          exact
          path="/order/confirm"
          component={() => (
            <OrderConfirm
              setIsBreadCrumbs={setIsBreadCrumbs}
              data={orderFormData}
            />
          )}
        />
        <Route
          exact
          path="/order/completed"
          component={() => (
            <OrderCompleted
              setIsBreadCrumbs={setIsBreadCrumbs}
              data={orderFormData}
            />
          )}
        />
        <Route exact path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default OrderContainer;
