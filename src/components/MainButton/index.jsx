import React from 'react';

import styles from './mainButton.module.scss';

import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const MainButton = ({ buttonWidth, buttonText, type }) => {
  return (
    <div className={cx('mainButton', `${type}`, `${buttonWidth}`)}>
      <a className={styles.applicationBtn} href="section#">
        {buttonText}
      </a>
    </div>
  );
};

export default MainButton;
