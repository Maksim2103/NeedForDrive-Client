import React from 'react';

import styles from './optionsSelect.module.scss';
import SelectAdditionalServices from './SelectAdditionalServices';

import SelectColor from './SelectColor';
import SelectDate from './SelectDate';
import SelectTariff from './SelectTariff';

const OptionsSelect = () => {
  return (
    <div className={styles.wrapper}>
      <SelectColor />
      <SelectDate />
      <SelectTariff />
      <SelectAdditionalServices />
    </div>
  );
};
export default OptionsSelect;
