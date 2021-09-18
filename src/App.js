import '../src/assets/styles/reset.scss';
import './App.scss';

import Content from './components/Content';
import SideBar from './components/SideBar';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="content-wrapper">
        <div className="content">
          <Content />
        </div>
        <div className="slider">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default App;
