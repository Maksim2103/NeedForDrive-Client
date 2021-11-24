import React from 'react';
import MainButton from '../../MainButton';

import styles from './bodyContent.module.scss';

const buttonTitle = 'Забронировать';

const BodyContent = () => {
  return (
    <div className={styles.inner}>
      <h3 className={styles.title}>Каршеринг</h3>
      <h3 className={styles.subTitle}>Need for drive</h3>
      <h2 className={styles.description}>
        Поминутная аренда авто твоего города
      </h2>
      <MainButton
        buttonWidth="big"
        buttonTitle={buttonTitle}
        type="main"
        link="/order/location"
        visibleStep={true}
      />
    </div>
  );
};

export default BodyContent;
