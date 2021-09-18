import React from 'react';

const MainButton = ({ buttonWidth, buttonText, buttonBackGroundColor }) => {
  return (
    <div
      className="main-button"
      style={{
        width: buttonWidth,
        background: buttonBackGroundColor,
      }}
    >
      <a className="application-btn" href="section#">
        {buttonText}
      </a>
    </div>
  );
};

export default MainButton;
