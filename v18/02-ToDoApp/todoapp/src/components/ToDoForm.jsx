import { useState } from "react";

import styles from "./ToDoForm.module.css";

export default function TodoForm({ todoList, setTodoList }) {
  const [todo, setTodo] = useState("");

  // handler for add todo button
  const handleAddClick = (e) => {
    // prevent page refreshing
    e.preventDefault();

    if (todo.length > 0) {
      // add todo from input to todoList
      setTodoList([
        ...todoList,
        { id: crypto.randomUUID(), name: todo, isCompleted: false },
      ]);

      // clear input field
      setTodo("");
    }
  };

  return (
    <form className={styles.todoForm}>
      <div className={styles.flex}>
        <input
          className={styles.formInput}
          placeholder="What should you do?"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className={styles.formButton}
          onClick={(e) => handleAddClick(e)}
        >
          Add
        </button>
      </div>
    </form>
  );
}
