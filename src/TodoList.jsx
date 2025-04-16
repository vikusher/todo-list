import TodoListItem from './TodoListItem';

function TodoList({ todoList, onCompleteTodo }) {
  // filter out completed todos so they don’t show up in the list
    const filteredTodoList = todoList.filter(todo => !todo.isCompleted);

return (
    filteredTodoList.length === 0 ? (
         // if there are no todos to show, show a message
      <p>Add todo above to get started</p>
    ) : (
        // otherwise, show the list of todos
      <ul>
        {filteredTodoList.map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onCompleteTodo={onCompleteTodo}
          />
        ))}
      </ul>
    )
  );
}

export default TodoList;