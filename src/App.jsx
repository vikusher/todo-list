import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useState } from 'react';


function App() {
 // state to hold the list of todos
  const [todoList, setTodoList] = useState([]);

 // function to add a new todo to the list
  function handleAddTodo(newTodo) {
  
  // add the new todo with isCompleted set to false
    setTodoList ([...todoList, {...newTodo, isCompleted: false}]); 
  }
  // function to mark a todo as completed
  function completeTodo(id) {
    const updatedTodos = todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, isCompleted: true};
      }
      return todo;
    });
    setTodoList(updatedTodos); // Update the todoList with completed status
  }


  return (
    <div>
      <h1>Todo List</h1>
       {/* pass the addTodo handler to the form */}
      <TodoForm onAddTodo={handleAddTodo} />

       {/* pass the current todoList and completeTodo handler to the list */}
      <TodoList todoList={todoList} onCompleteTodo={completeTodo}/> 
    </div>
  );
}

export default App;
