import React from 'react';
import BurgerMenu from '../SideBar/BurgerMenu';
import LanguageMenu from '../SideBar/LanguageMenu';

const SideBar = () => {
  return (
    <div className="side-bar__wrapper">
      <div className="side-bar__burger">
        <BurgerMenu />
      </div>
      <div className="side-bar__language">
        <LanguageMenu />
      </div>
    </div>
  );
};

export default SideBar;
