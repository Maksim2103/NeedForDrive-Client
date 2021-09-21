import React from 'react';

import styles from './footerContent.module.scss';

const FooterContent = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>© 2016-2019 «Need for drive»</p>
      <a className={styles.tel} href="tel:+74952342244">
        8 (495) 234-22-44
      </a>
    </div>
  );
};

export default FooterContent;
