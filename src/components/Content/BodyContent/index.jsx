import React from 'react';
import MainButton from '../../MainButton';

const BodyContent = () => {
  return (
    <div className="body-content__inner">
      <h3 className="body-content__title">Каршеринг</h3>
      <h3 className="body-content__title body-content__title-sub">
        Need for drive
      </h3>
      <h2 className="body-content__description">
        Поминутная аренда авто твоего города
      </h2>
      <MainButton buttonWidth="250px" buttonText="Забронировать" />
    </div>
  );
};

export default BodyContent;
