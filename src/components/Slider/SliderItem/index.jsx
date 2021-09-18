import React from 'react';
import MainButton from '../../MainButton';

const SliderItem = ({ title, description, image, buttonBackGroundColor }) => {
  return (
    <div className="slider-item" style={{ backgroundImage: `url(${image})` }}>
      {/* <img src={image} alt="" srcset="" /> */}
      <div className="slider-item__inner">
        <h3 className="slider-item__title">{title}</h3>
        <p className="slider-item__description">{description}</p>
        <MainButton
          buttonWidth="164px"
          buttonText="Подробнее"
          buttonBackGroundColor={buttonBackGroundColor}
        />
      </div>
    </div>
  );
};

export default SliderItem;
