import { useState } from "react";

export default function TodoListItem({ todo, completeCallback }) {
  // const [todo, setTodo] = useState(todoProp);

  function todoItemClickHandler(id) {
    // setTodo({ ...todo, isCompleted: !todo.isCompleted });
    completeCallback(id);
  }

  return (
    <>
      <li /*onClick={(e) => todoItemClickHandler(e)}*/>
        {todo.id}{" "}
        <span
          style={todo.isCompleted ? { textDecoration: "line-through" } : {}}
        >
          {todo.name}
        </span>{" "}
        {/* {todo.isCompleted ? "true" : "false"} */}
        <button onClick={() => todoItemClickHandler(todo.id)}>
          {todo.isCompleted ? "Revert" : "Complete"}
        </button>
      </li>
    </>
  );
}
