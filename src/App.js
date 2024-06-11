import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react';
import {BsBookmarkX, BsBookmarkStar, BsBookMarkCheckFill, BsBookmarkFill, BsFillBackspaceFill} from 'react-icons/bs';

//const API ="http://localhost:5000"
const API ="https://todolist-db-0luf.onrender.com"

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
  const [loading, setLoading] = useState(false) //Feedback pro usuario

  useEffect(() => {
    const loadData = async() => {
      setLoading(true)
      const res = await fetch(API+"/todos") //o padrao ja é um get
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err)); 

      setLoading(false);

      setTodos(res) 
    };

    loadData();
  }, [])

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

    setTodos((prevState) => [...prevState, todo]); //Apos inserir dados recarregar a pagina sem atualizar ela

    //Enviar para a API
    console.log(todo)
    setTitle("")
    setTime("")
  };

  const handleEdit = async (todo) => {
    todo.done = !todo.done;

    const data = await fetch(API + "/todos/" + todo.id, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type" : "application/json",
      }
    });

    setTodos((prevState) => prevState.map((t) => (t.id === data.id ? (t = data) : t)))
  }

  const handleDelete = async(id) => {
  
    await fetch(API + "/todos/" + id, {
      method: "DELETE",
      
    });

    setTodos((prevState) => prevState.filter((todos) => todos.id !== id));
  };

  if(loading){
    return <p>Carregando...</p>
  }

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
        {todos.length === 0 && 
          <p>Não há tarefas</p>}
        {todos.map(
          (todo) => (
            <div 
              className='todo'
              key = {todo.id}
            >
              <h3 className={todo.done ? "todo-done" : ""}>{todo.title}</h3>
              <p>Duração: {todo.time}</p>
              <div className='actions'>
                <span onClick={() => handleEdit(todo)}>
                  {!todo.done ? <BsBookmarkStar /> : <BsBookmarkX />}
                  <BsFillBackspaceFill onClick={() => handleDelete(todo.id)  } /> {/*no arrow function é só executado quando clicado*/}
                </span>
                
              </div>
            </div>
          )
        )}
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
