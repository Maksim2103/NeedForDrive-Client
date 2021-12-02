import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { Switch, Route, useLocation } from 'react-router-dom';

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
import {
  selectDisplayStatus,
  setDefaultInitialState,
  setStatusDisplayStatus,
} from '../../../../redux/reducers/orderSlice';
import { fetchAsyncGetOrderById } from '../../../../redux/thunks';
import { useSelector } from 'react-redux';

const OrderContainer = () => {
  const dispatch = useDispatch();
  const location = useRef(useLocation());
  const [isBreadCrumbs, setIsBreadCrumbs] = useState(true);

  const displayStatus = useSelector(selectDisplayStatus);

  useEffect(() => {
    const id = location.current.pathname.match(/(\d|\w)*$/)[0];
    if (Boolean(id)) {
      dispatch(fetchAsyncGetOrderById(id));
    } else {
      dispatch(setStatusDisplayStatus('display'));
    }

    return () => {
      dispatch(setDefaultInitialState());
    };
  }, [dispatch]);

  return (
    <div className={styles.orderContainer}>
      <div className={styles.headerContainer}>
        <HeaderContent wrapperClassName={'wrapper'} />
      </div>
      {isBreadCrumbs && (
        <div className={styles.orderBreadCrumbs}>
          <OrderBreadCrumbs />
        </div>
      )}
      {displayStatus === 'display' && (
        <div className={styles.orderContent}>
          <Switch>
            <Route
              path="/order/location/"
              component={() => (
                <OrderLocation setIsBreadCrumbs={setIsBreadCrumbs} />
              )}
            />
            <Route
              path="/order/model/"
              component={() => (
                <OrderModel setIsBreadCrumbs={setIsBreadCrumbs} />
              )}
            />
            <Route path="/order/options/" component={() => <OrderOptions />} />
            <Route
              path="/order/total/"
              component={() => (
                <OrderTotal setIsBreadCrumbs={setIsBreadCrumbs} />
              )}
            />
            <Route
              path="/order/confirm/"
              component={() => (
                <OrderConfirm setIsBreadCrumbs={setIsBreadCrumbs} />
              )}
            />
            <Route
              path="/order/completed/"
              component={() => (
                <OrderCompleted setIsBreadCrumbs={setIsBreadCrumbs} />
              )}
            />
            <Route exact path="*" component={NotFoundPage} />
          </Switch>
        </div>
      )}
    </div>
  );
};

export default OrderContainer;
