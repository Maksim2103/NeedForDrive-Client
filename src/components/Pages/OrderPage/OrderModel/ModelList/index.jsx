import React, { useMemo } from 'react';
import ModelItem from './ModelItem';

import styles from './modelList.module.scss';

import { useSelector } from 'react-redux';
import {
  selectCategory,
  selectResponseCars,
  setFilteredCar,
} from '../../../../../redux/reducers/orderSlice';
import { useDispatch } from 'react-redux';

const ModelList = () => {
  const dispatch = useDispatch();
  const carsData = useSelector(selectResponseCars);
  const category = useSelector(selectCategory);

  const filteredCarsData = useMemo(
    () =>
      carsData
        ?.filter((el) => el.categoryId !== null)
        .filter((el) => {
          if (category === '') return el;
          if (el.categoryId.name === category) return el;
          return false;
        }),
    [carsData, category],
  );

  const handleModelItem = (_, el) => {
    dispatch(setFilteredCar(el));
  };

  return (
    <div className={styles.wrapper} id="list">
      {filteredCarsData?.map((el) => {
        return (
          <div key={el.id}>
            <ModelItem
              img={el.thumbnail.path}
              minPrice={el.priceMin}
              maxPrice={el.priceMax}
              model={el.name}
              onClick={(e) => handleModelItem(e, el)}
              elementId={el.id}
            />
          </div>
        );
      })}
    </div>
  );
};
export default ModelList;
