import React, { useState, useEffect } from 'react';

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
import { useSelector } from 'react-redux';
import {
  selectCity,
  selectColor,
  selectDateFrom,
  selectDateTo,
  selectModel,
  selectPoint,
  selectRateName,
} from '../../../../redux/reducers/orderSlice';

const OrderContainer = () => {
  const [isBreadCrumbs, setIsBreadCrumbs] = useState(true);

  const cityName = useSelector(selectCity);
  const pointName = useSelector(selectPoint);

  const model = useSelector(selectModel);

  const color = useSelector(selectColor);
  const rateName = useSelector(selectRateName);
  const dateFrom = useSelector(selectDateFrom);
  const dateTo = useSelector(selectDateTo);

  const step1 = Boolean(cityName) && Boolean(pointName);
  const step2 = Boolean(model);
  const step3 =
    Boolean(color) && Boolean(rateName) && Boolean(dateFrom) && Boolean(dateTo);
  const step4 = true;

  // const location = useLocation();
  // console.log(`foo`, location);

  // useEffect(() => {
  //   const id = location.pathname.match(/(\d|\w)+$/i)[0];
  //   console.log(`id`, id);
  // }, [location]);

  return (
    <div className={styles.orderContainer}>
      <div className={styles.headerContainer}>
        <HeaderContent wrapperClassName={'wrapper'} />
      </div>
      {isBreadCrumbs && (
        <div className={styles.orderBreadCrumbs}>
          <OrderBreadCrumbs
            step1={step1}
            step2={step2}
            step3={step3}
            step4={step4}
          />
        </div>
      )}
      <div className={styles.orderContent}>
        <Switch>
          <Route
            path="/order/location/"
            component={() => (
              <OrderLocation
                setIsBreadCrumbs={setIsBreadCrumbs}
                isRoute={step1}
              />
            )}
          />
          <Route
            path="/order/model/"
            component={() => (
              <OrderModel setIsBreadCrumbs={setIsBreadCrumbs} isRoute={step2} />
            )}
          />
          <Route
            path="/order/options/"
            component={() => (
              <OrderOptions
                setIsBreadCrumbs={setIsBreadCrumbs}
                isRoute={step3}
              />
            )}
          />
          <Route
            path="/order/total/"
            component={() => (
              <OrderTotal setIsBreadCrumbs={setIsBreadCrumbs} isRoute={step4} />
            )}
          />
          <Route
            path="/order/confirm/"
            component={() => (
              <OrderConfirm
                setIsBreadCrumbs={setIsBreadCrumbs}
                isRoute={true}
              />
            )}
          />
          <Route
            path="/order/completed/"
            component={() => (
              <OrderCompleted
                setIsBreadCrumbs={setIsBreadCrumbs}
                isRoute={true}
              />
            )}
          />
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
};

export default OrderContainer;
