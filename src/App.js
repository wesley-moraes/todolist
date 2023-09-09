import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react';
import {BsTresh, BsBookMarkCheck, BsBookMarkCheckFill} from 'react-icons/bs'

const API ="http://localhost:5000"

/*
import FirstComponent from './components/FirstComponent';
import AnotherFuncion from './components/AnotherFuncion';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';
*/

function App() {

  const [title, setTitle] = useState("") // O titulo da task
  const [time, setTime] = useState("") //Horario da task
  const [todos, setTodos] = useState([]) //as proprias tarefas e imprimir elas
  const [loading, setLoadin] = useState(false) //Feedback pro usuario

  return(
    <div className="App">
      <div className="todo_header">
        <h1>React To Do</h1>
      </div>
      <div className="form-todo">
        <p>Formulário</p>
      </div>
      <div className="list-todo">
        <p>Lista</p>
      </div>
      {/*
      <h2>Hello react</h2>
      <FirstComponent />
      <AnotherFuncion />
      <Images />
      <Hooks />
      <List />
      <RenderCond x={5} y={10} />
      <Fragment />
      <Container>
        <h1>Este é o filho do container</h1>
      </Container>
      */
      }
    </div>
  );
}

export default App;
