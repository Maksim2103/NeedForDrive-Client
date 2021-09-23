import React from 'react';
import SliderItem from './SliderItem';

import AwesomeSlider from 'react-awesome-slider';

import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import styles from './slider.module.scss';

const initialSliderItemData = [
  {
    title: 'Бесплатная парковка',
    description:
      'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    type: 'main',
  },
  {
    title: 'Страховка',
    description: 'Полная страховка автомобиля',
    type: 'insurance',
  },
  {
    title: 'Бензин',
    description: 'Полный бак на любой заправке города за наш счёт',
    type: 'fuel',
  },
  {
    title: 'Обслуживание',
    description: 'Автомобиль проходит еженедельное ТО',
    type: 'service',
  },
];

const Slider = () => {
  return (
    <div className={styles.wrapper}>
      <AwesomeSlider animation="cubeAnimation">
        {initialSliderItemData.map((el) => {
          return (
            <div key={el.type} className={styles.itemWrapper}>
              <SliderItem
                title={el.title}
                description={el.description}
                type={el.type}
              />
            </div>
          );
        })}
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
