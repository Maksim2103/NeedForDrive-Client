import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './mainButton.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MainButton = ({ buttonWidth, buttonTitle, type, link }) => {
  return (
    <div className={cx('mainButton', `${type}`, `${buttonWidth}`)}>
      <NavLink to={link} className={styles.applicationBtn} href="section#">
        {buttonTitle}
      </NavLink>
    </div>
  );
};

export default MainButton;
