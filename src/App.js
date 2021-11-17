import '../src/assets/styles/reset.scss';

import { Switch, Route, HashRouter } from 'react-router-dom';
import styles from './App.module.scss';

import MainPage from './components/Pages/MainPage/index';
import ParckingPage from './components/Pages/ParckingPage/index';
import InsurancePage from './components/Pages/InsurancePage/index';
import FuelPage from './components/Pages/FuelPage/index';
import ServicePage from './components/Pages/ServicePage/index';
import NotFoundPage from './components/Pages/NotFoundPage';
import OrderPage from './components/Pages/OrderPage';

function App() {
  return (
    <div className={styles.App}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/order" component={OrderPage} />
          <Route exact path="/parcking" component={ParckingPage} />
          <Route exact path="/insurance" component={InsurancePage} />
          <Route exact path="/fuel" component={FuelPage} />
          <Route exact path="/service" component={ServicePage} />
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
