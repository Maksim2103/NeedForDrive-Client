import React from 'react';
import SliderItem from './SliderItem';

import AwesomeSlider from 'react-awesome-slider';

<<<<<<< HEAD
import '../../assets/styles/sliderAwesome.css';
=======
import 'react-awesome-slider/dist/styles.css';
>>>>>>> master
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import styles from './slider.module.scss';

const initialSliderItemData = [
  {
    title: 'Бесплатная парковка',
    description:
      'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    type: 'main',
<<<<<<< HEAD
    link: '/parcking',
=======
>>>>>>> master
  },
  {
    title: 'Страховка',
    description: 'Полная страховка автомобиля',
    type: 'insurance',
<<<<<<< HEAD
    link: '/insurance',
=======
>>>>>>> master
  },
  {
    title: 'Бензин',
    description: 'Полный бак на любой заправке города за наш счёт',
    type: 'fuel',
<<<<<<< HEAD
    link: '/fuel',
=======
>>>>>>> master
  },
  {
    title: 'Обслуживание',
    description: 'Автомобиль проходит еженедельное ТО',
    type: 'service',
<<<<<<< HEAD
    link: '/service',
=======
>>>>>>> master
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
<<<<<<< HEAD
                link={el.link}
=======
>>>>>>> master
              />
            </div>
          );
        })}
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
