import { useState, useRef } from 'react';

function TodoForm({ onAddTodo }) {
  // using `useState` to track the value of the input field.
  const [title, setTitle] = useState('');
  // using `useRef` to create a reference to the input field
  // so we can focus it after adding a todo.
  const todoTitleInput = useRef('');

  // `handleAddTodo` is called when the form is submitted.
  function handleAddTodo(event) {
    // stops the page from refreshing when the form is submitted 
    event.preventDefault();

   //we create a new todo object with:
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
    };

    if (newTodo.title !== '') {
      onAddTodo(newTodo); // call the function passed from App.jsx to add the new todo to the list
      setTitle(''); // clear the input field
    }
    // use the ref to focus the input field again after submission
    //tthis helps the user type the next todo faster, without clicking
    todoTitleInput.current.focus(); 
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>
      <input 
        type="text" 
        id="todoTitle" 
        name="title"
        value={title} // controlled input
        onChange={(e) => setTitle(e.target.value)} //updates the state as the user types
        ref={todoTitleInput} // attaches the ref to the input field
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
