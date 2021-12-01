import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectResponseCars,
  selectResponseCarsStatus,
  selectRoutingSteps,
} from '../../../../redux/reducers/orderSlice';
import { fetchAsyncGetCars } from '../../../../redux/thunks';
import Loader from '../../../Loader/Loader';
import OrderConditions from '../OrderConditions';
import OrderConditionsMobile from '../OrderConditionsMobile';
import ModelList from './ModelList';
import ModelSelect from './ModelSelect';

import styles from './orderModel.module.scss';

const buttonTitle = 'Дополнительно';
const buttonLink = '/order/options';
const buttonType = 'order';

const OrderModel = ({ setIsBreadCrumbs }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectResponseCarsStatus);
  const carsResponseData = useSelector(selectResponseCars);

  const { stepTwo } = useSelector(selectRoutingSteps);

  useEffect(() => {
    if (!carsResponseData) dispatch(fetchAsyncGetCars());
  }, [dispatch, carsResponseData]);

  const [isModal, setModal] = React.useState(false);
  const onClose = () => setModal(false);

  return (
    <div className={styles.wrapper}>
      {isLoading === 'succeeded' ? (
        <>
          <div className={styles.colLeft}>
            <ModelSelect />
            <ModelList />
          </div>
          <div className={styles.mobile}>
            <div className={styles.colRight__mobile}>
              {!isModal ? (
                <button
                  className={styles.mobile__button}
                  onClick={() => setModal(!isModal)}
                >
                  Показать детали
                </button>
              ) : (
                <button
                  className={styles.mobile__button_close}
                  onClick={() => setModal(!isModal)}
                >
                  X
                </button>
              )}
              <OrderConditionsMobile
                visible={isModal}
                onClose={onClose}
                buttonTitle={buttonTitle}
                buttonLink={buttonLink}
                type={buttonType}
                setIsBreadCrumbs={setIsBreadCrumbs}
                visibleStep={stepTwo}
              />
            </div>
          </div>
          <div className={styles.colRight}>
            <OrderConditions
              buttonTitle={buttonTitle}
              buttonLink={buttonLink}
              type={buttonType}
              setIsBreadCrumbs={setIsBreadCrumbs}
              visibleStep={stepTwo}
            />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default OrderModel;
