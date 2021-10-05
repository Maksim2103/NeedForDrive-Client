import React from 'react';
import ModelItem from './ModelItem';

import styles from './modelList.module.scss';

import image1 from '../../../../../assets/images/car1.png';
import image2 from '../../../../../assets/images/car2.png';
import image3 from '../../../../../assets/images/car3.png';
import image4 from '../../../../../assets/images/car4.png';

const initialItemListData = [
  {
    model: 'ELANTRA',
    price: '12 000 - 25 000 ₽',
    img: image1,
    active: false,
  },
  {
    model: 'i30 N',
    price: '10 000 - 32 000 ₽',
    img: image2,
    active: true,
  },
  {
    model: 'CRETA',
    price: '12 000 - 25 000 ₽',
    img: image3,
    active: false,
  },
  {
    model: 'SONATA',
    price: '10 000 - 32 000 ₽',
    img: image4,
    active: false,
  },
  {
    model: 'ELANTRA',
    price: '12 000 - 25 000 ₽',
    img: image1,
    active: false,
  },
  {
    model: 'i30 N',
    price: '10 000 - 32 000 ₽',
    img: image2,
    active: false,
  },
];

const ModelList = () => {
  return (
    <div className={styles.wrapper}>
      {initialItemListData.map((el, index) => {
        return (
          <div key={index}>
            <ModelItem
              img={el.img}
              price={el.price}
              model={el.model}
              active={el.active}
            />
          </div>
        );
      })}
    </div>
  );
};
export default ModelList;
