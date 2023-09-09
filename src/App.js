import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent';
import AnotherFuncion from './components/AnotherFuncion';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <h2>Hello react</h2>
      <FirstComponent />
      <AnotherFuncion />
      <Images />
      <Hooks />
      <List />
    </div>
  );
}

export default App;
