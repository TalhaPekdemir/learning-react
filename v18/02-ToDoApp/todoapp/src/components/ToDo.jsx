import { useState } from "react";
import ToDoList from "./ToDoList";
import TodoForm from "./TodoForm";

export default function ToDo() {
  const [todoList, setTodoList] = useState([]);

  // get total amount of todos
  var totalTasks = todoList.length;

  // get amount of finished todos
  var finishedTasks = todoList.filter((item) => {
    item.isCompleted == true;
  });

  // get amount of unfinished todos
  var unfinishedTasks = totalTasks - finishedTasks;

  // works but noted that building another array might suffer performance
  // TODO: benchmark both
  // Benchmark result:
  // Updating a todo takes less than a millisecond in both cases.
  const completeTodo = (id) => {
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

    setTodoList(updatedTodoList);
  };

  const deleteTodo = (id) => {
    const deleteIndex = todoList.findIndex((todo) => todo.id === id);

    const newList = [
      ...todoList.slice(0, deleteIndex),
      ...todoList.slice(deleteIndex + 1),
    ];

    setTodoList(newList);
  };

  return (
    <div>
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <ToDoList todoList={todoList} setTodoList={setTodoList} />
      Total tasks: {totalTasks}
      <br />
      Finished: {finishedTasks}
      Unfinished: {unfinishedTasks}
    </div>
  );
}
