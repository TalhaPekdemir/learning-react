import { useState } from "react";
import styles from "./ToDo.module.css";
import ToDoList from "./ToDoList";

export default function ToDo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  // get total amount of todos
  var totalTasks = todoList.length;

  // get amount of finished todos
  var finishedTasks = todoList.filter((item) => {
    item.isCompleted == true;
  });

  // get amount of unfinished todos
  var unfinishedTasks = totalTasks - finishedTasks;

  // handler for add todo button
  function handleAddClick(e) {
    // prevent page refreshing
    e.preventDefault();

    // add todo from input to todoList
    setTodoList([
      ...todoList,
      { id: crypto.randomUUID(), name: todo, isCompleted: false },
    ]);

    // clear input field
    setTodo("");
  }

  // works but noted that building another array might suffer performance
  // TODO: benchmark both
  // Benchmark result:
  // Updating a todo takes less than a millisecond in both cases.
  function completeTodoCallback(id) {
    const startTime = Date.now();
    // find the index of todo that needs updating
    // const updateIndex = todoList.findIndex((todo) => todo.id === id);

    // // change property of todo
    // const updatedTodo = {
    //   ...todoList[updateIndex],
    //   isCompleted: !todoList[updateIndex].isCompleted,
    // };

    // // then sandwich updated todo using slice and spread operator
    // const updatedTodoList = [
    //   ...todoList.slice(0, updateIndex),
    //   updatedTodo,
    //   ...todoList.slice(updateIndex + 1),
    // ];

    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    const stopTime = Date.now();

    const elapsed = stopTime - startTime;
    console.log(elapsed + "ms");

    setTodoList(updatedTodoList);
  }

  return (
    <div>
      <div>
        <form>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className={styles.todoInput}
          />
          <button
            onClick={(e) => handleAddClick(e)}
            className={styles.todoFormButton}
          >
            Add
          </button>
        </form>
      </div>
      <ToDoList todoList={todoList} completeCallback={completeTodoCallback} />
      Total tasks: {totalTasks}
      <br />
      Finished: {finishedTasks}
      Unfinished: {unfinishedTasks}
    </div>
  );
}
