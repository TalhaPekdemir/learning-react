import { useState } from "react";
import TodoListItem from "./TodoListItem";

export default function ToDo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleAddClick(e) {
    // prevent page refreshing
    e.preventDefault();

    // add todo from input to todoList
    setTodoList([...todoList, todo]);

    // clear input field
    setTodo("");
  }

  return (
    <div>
      <form>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={(e) => handleAddClick(e)}>Add</button>
      </form>
      <ul>
        {todoList.map((item) => (
          <TodoListItem key={crypto.randomUUID()} todo={item} />
        ))}
      </ul>
    </div>
  );
}
