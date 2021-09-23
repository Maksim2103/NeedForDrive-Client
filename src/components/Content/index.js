import React from 'react';

import styles from './content.module.scss';

import BodyContent from './BodyContent';
import FooterContent from './FooterContent';
import HeaderContent from './HeaderContent';

const Content = () => {
  return (
    <div className={styles.inner}>
      <HeaderContent />
      <BodyContent />
      <FooterContent />
    </div>
  );
};

export default Content;
