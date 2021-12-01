import { useSelector } from 'react-redux';
import { selectResponseIdStatus } from '../../../../redux/reducers/orderSlice';
import Loader from '../../../Loader/Loader';
import OrderConditions from '../OrderConditions';
import CanceledDetails from './CanceledDetails/index';
// import CanceledDetails from './CanceledDetails/index';

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
            <CanceledDetails />
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
