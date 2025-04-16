import { useState, useRef } from 'react';

function TodoForm({ onAddTodo }) {
  // state to control the input field value
  const [workingTodo, setWorkingTodo] = useState('');
  // ref to auto-focus the input field after submitting
  const todoTitleInput = useRef(null);

  // `handleAddTodo` is called when the form is submitted.
  function handleAddTodo(event) {
    // prevents page reload
    event.preventDefault();

    const trimmedTitle = workingTodo.trim();
    const newTodo = {
      id: Date.now(),
      title: trimmedTitle,
    };

  // only add the todo if the title isn't empty
    if (trimmedTitle !== '') {
      onAddTodo(newTodo);   // send todo to App
      setWorkingTodo('');   // clear input field
      todoTitleInput.current.focus(); // focus input again
    }
    // use the ref to focus the input field again after submission
    //tthis helps the user type the next todo faster, without clicking
    todoTitleInput.current.focus(); 
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo: </label>
      <input 
        type="text" 
        id="todoTitle" 
        name="title"
        value={workingTodo} // controlled input value
        onChange={(e) => setWorkingTodo(e.target.value)} //updates the state as the user types
        ref={todoTitleInput} // attaches the ref to the input field
      />
      <button type="submit" disabled={workingTodo.trim() === ''}>Add Todo</button>
    </form>
  );
}

export default TodoForm;

