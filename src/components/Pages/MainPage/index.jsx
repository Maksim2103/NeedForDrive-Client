import React from 'react';
import Content from '../../Content';
import SideBar from '../../SideBar';
import Slider from '../../Slider';

import styles from './mainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <SideBar />
      <div className={styles.container}>
        <Content />
        <Slider />
      </div>
    </div>
  );
};

export default MainPage;
