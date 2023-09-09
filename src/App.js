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

  const handleSubmit = async(e) => {
    e.preventDefault()
   
    const todo = {
      id: Math.random(),
      title,
      time,
      done: false
    };

    await fetch(API + "/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type" : "application/json",
      }
    })

    //Enviar para a API
    console.log(todo)
    setTitle("")
    setTime("")
  };


  return(
    <div className="App">
      <div className="todo_header">
        <h1>React To Do</h1>
      </div>
      <div className="form_todo">
        <h2>Insira sua próxima tarefa: </h2>
        <form onSubmit={handleSubmit}>
          <div className='form_control'>
            <label htmlFor='title'>O que você vai fazer?</label>
            <input 
              type='text' 
              name='title' 
              placeholder='Título da terefa'
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
              required
            /> 
          </div>
          <div className='form_control'>
            <label htmlFor='time'>Duração: </label>
            <input 
              type='text' 
              name='time' 
              placeholder="Tempo estimado (em horas)"
              onChange={(e) => setTime(e.target.value)}
              value={time || ""}
              required
            /> 
          </div>
          <input type='submit' value="Enviar" />
        </form>
      </div>
      <div className="list_todo">
        <h2>Lista de tarefas: </h2>
        {todos.length === 0 && <p>Não há tarefas</p>}
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
