import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      Данные загружаются, пожалуйста, подождите...
    </div>
  );
};

export default Loader;
