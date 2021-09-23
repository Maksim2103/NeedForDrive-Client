import React from 'react';

<<<<<<< HEAD
import { NavLink } from 'react-router-dom';

=======
>>>>>>> master
import styles from './mainButton.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

<<<<<<< HEAD
const MainButton = ({ buttonWidth, buttonText, type, link }) => {
  return (
    <div className={cx('mainButton', `${type}`, `${buttonWidth}`)}>
      <NavLink to={link} className={styles.applicationBtn} href="section#">
        {buttonText}
      </NavLink>
=======
const MainButton = ({ buttonWidth, buttonText, type }) => {
  return (
    <div className={cx('mainButton', `${type}`, `${buttonWidth}`)}>
      <a className={styles.applicationBtn} href="section#">
        {buttonText}
      </a>
>>>>>>> master
    </div>
  );
};

export default MainButton;
