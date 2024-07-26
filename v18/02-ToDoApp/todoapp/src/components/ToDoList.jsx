import TodoListItem from "./TodoListItem";

import styles from "./ToDoList.module.css";

export default function ToDoList({ todoList, setTodoList }) {
  return (
    <div className={styles.container}>
      {todoList.map((item) => (
        <TodoListItem
          key={item.id}
          todo={item}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
}
