function TodoListItem({todo, onCompleteTodo }){
    return (
        <li>
          <form>
             {/* checkbox to mark todo as completed */}
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => onCompleteTodo(todo.id)}  // when changed, mark as completed
            />
            {/* show the title of the todo */}
            {todo.title}
          </form>
        </li>
      );
    }
    

export default TodoListItem;