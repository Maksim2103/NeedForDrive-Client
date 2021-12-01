import { useSelector } from 'react-redux';
import { selectResponseIdStatus } from '../../../../redux/reducers/orderSlice';
import Loader from '../../../Loader/Loader';
import OrderConditions from '../OrderConditions';

import styles from './orderCanceled.module.scss';

const buttonTitle = 'На главную';
const buttonLink = '/';
const buttonType = 'order';

const OrderCanceled = () => {
  const isLoading = useSelector(selectResponseIdStatus);

  return (
    <div className={styles.wrapper}>
      {isLoading === 'succeeded' ? (
        <>
          <div className={styles.colLeft}>
            <h3 className={styles.title}>Ваш заказ отменён</h3>
          </div>
          <div className={styles.colRight}>
            <OrderConditions
              buttonTitle={buttonTitle}
              buttonLink={buttonLink}
              type={buttonType}
              visibleStep={true}
            />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default OrderCanceled;
