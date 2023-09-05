import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent';
import AnotherFuncion from './components/AnotherFuncion';
import Images from './components/Images';

function App() {
  return (
    <div className="App">
      <h2>Hello react</h2>
      <FirstComponent />
      <AnotherFuncion />
      <Images />
    </div>
  );
}

export default App;
