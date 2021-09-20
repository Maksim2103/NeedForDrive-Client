import React from 'react';
import SliderItem from './SliderItem';

import AwesomeSlider from 'react-awesome-slider';

import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import backImage from './../../assets/images/BackgroundSlider1.png';
import backImage2 from './../../assets/images/BackgroundSlider2.png';
import backImage3 from './../../assets/images/BackgroundSlider3.png';
import backImage4 from './../../assets/images/BackgroundSlider4.png';

const initialSliderItemData = [
  {
    title: 'Бесплатный парковка',
    description:
      'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    image: backImage,
    buttonBackGroundColor: `linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)`,
  },
  {
    title: 'Страховка',
    description: 'Полная страховка страховка автомобиля',
    image: backImage2,
    buttonBackGroundColor: `linear-gradient(90deg, #132949 0%, #0C7B67 100%)`,
  },
  {
    title: 'Бензин',
    description: 'Полный бак на любой заправке города за наш счёт',
    image: backImage3,
    buttonBackGroundColor: `linear-gradient(90deg, #493013 0%, #7B0C3B 100%)`,
  },
  {
    title: 'Обслуживание',
    description: 'Автомобиль проходит еженедельное ТО',
    image: backImage4,
    buttonBackGroundColor: `linear-gradient(90deg, #281349 0%, #720C7B 100%)`,
  },
];

const Slider = () => {
  return (
    <div className="slider__wrapper">
      <AwesomeSlider animation="cubeAnimation">
        {initialSliderItemData.map((el) => {
          return (
            <div key={el.image} className="slider-item__wrapper">
              <SliderItem
                title={el.title}
                description={el.description}
                image={el.image}
                buttonBackGroundColor={el.buttonBackGroundColor}
              />
            </div>
          );
        })}
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
