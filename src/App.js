import '../src/assets/styles/reset.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
      <Router>
        <Switch>
          <Route exact path="/gh-pages-start" component={MainPage} />
          <Route exact path="/order" component={OrderPage} />
          <Route exact path="/parcking" component={ParckingPage} />
          <Route exact path="/insurance" component={InsurancePage} />
          <Route exact path="/fuel" component={FuelPage} />
          <Route exact path="/service" component={ServicePage} />
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
