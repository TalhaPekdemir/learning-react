import styles from "./ToDoListItem.module.css";

// I'm not comfortable with sending both todo and list itself just to
// set it by reference.
// Callbacks are cluttering props but managable in where they used.
// List reference as props is cleaner but kinda not makes sense,
// also mutating data where it is defined feels better.
export default function TodoListItem({ todo, todoList, setTodoList }) {
  const completeTodo = (id) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    setTodoList(updatedTodoList);
  };

  const deleteTodo = (item) => {
    setTodoList(todoList.filter((todo) => todo !== item));
  };

  return (
    <div className={styles.todoItem}>
      <div
        className={styles.todoItemName}
        style={todo.isCompleted ? { textDecoration: "line-through" } : {}}
        onClick={() => completeTodo(todo.id)}
      >
        {todo.name}
      </div>
      <div>
        <button
          className={styles.deleteButton}
          onClick={() => deleteTodo(todo)}
        >
          X
        </button>
      </div>
    </div>
  );
}
