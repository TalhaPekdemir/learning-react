import TodoListItem from "./TodoListItem";

export default function ToDoList({ todoList, completeCallback }) {
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 5, margin: 0 }}>
        {todoList.map((item) => (
          <TodoListItem
            key={item.id}
            todo={item}
            completeCallback={completeCallback}
          />
        ))}
      </ul>
    </div>
  );
}
