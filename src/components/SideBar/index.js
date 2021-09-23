import React from 'react';

import styles from './sideBar.module.scss';

import BurgerMenu from '../SideBar/BurgerMenu';
import LanguageMenu from '../SideBar/LanguageMenu';

const SideBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.burger}>
        <BurgerMenu />
      </div>
      <div className={styles.language}>
        <LanguageMenu />
      </div>
    </div>
  );
};

export default SideBar;
