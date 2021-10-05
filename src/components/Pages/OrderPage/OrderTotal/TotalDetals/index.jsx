import React from 'react';

import styles from './totalDetails.module.scss';

import image from '../../../../../assets/images/car2.png';

// const initialOrderConditionsData = [
//   {
//     title: 'Пункт выдачи',
//     description: 'Ульяновск',
//     doubleDescription: 'Нариманова 42',
//   },
//   {
//     title: 'Модель',
//     description: 'Hyndai, i30 N',
//     doubleDescription: null,
//   },
//   {
//     title: 'Цвет',
//     description: 'Голубой',
//     doubleDescription: null,
//   },
//   {
//     title: 'Длительность аренды',
//     description: '1д 2ч',
//     doubleDescription: null,
//   },
//   {
//     title: 'Тариф',
//     description: 'На сутки',
//     doubleDescription: null,
//   },
//   {
//     title: 'Полный бак',
//     description: 'Да',
//     doubleDescription: null,
//   },
// ];

const TotalDetails = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h3 className={styles.model}>Hyndai, i30 N</h3>
        <h3 className={styles.number}>K 761 HA 73</h3>
        <h3 className={styles.fuel}>
          <span>Топливо</span>100%
        </h3>
        <h3 className={styles.date}>
          <span>Доступна с</span>12.06.2019 12:00
        </h3>
      </div>
      <div>
        <img className={styles.image} src={image} alt="car" />
      </div>
    </div>
  );
};
export default TotalDetails;
