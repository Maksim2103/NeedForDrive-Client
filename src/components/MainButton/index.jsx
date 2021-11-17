import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './mainButton.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MainButton = ({ buttonWidth, buttonTitle, type, link, onClick }) => {
  return (
    <div>
      <NavLink
        className={cx(
          'mainButton',
          'applicationBtn',
          `${type}`,
          `${buttonWidth}`,
        )}
        to={link}
        onClick={onClick}
      >
        {buttonTitle}
      </NavLink>
    </div>
  );
};

export default MainButton;
