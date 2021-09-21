import '../src/assets/styles/reset.scss';
import './App.scss';

import Content from './components/Content';
import SideBar from './components/SideBar';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="container">
        <Content />
        <Slider />
      </div>
    </div>
  );
}

export default App;
