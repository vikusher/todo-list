import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useState } from 'react';


function App() {

  const [newTodo, setNewTodo] = useState('My first todo:');

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm setNewTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList /> 
    </div>
  )
}

export default App;
