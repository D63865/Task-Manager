import React from "react";
import Todo from "./Todo.js";

export default function ToDoList({
  todoArray,
  deleteTodoFromFirebase,
  updateDoneToFirebase,
  updateDataToFirebase,
}) {
  return (
    <div>
      {todoArray.map((todo) => {
        return (
          <Todo
            todo={todo}
            deleteTodoFromFirebase={deleteTodoFromFirebase}
            updateDoneToFirebase={updateDoneToFirebase}
            updateDataToFirebase={updateDataToFirebase}
          />
        );
      })}
    </div>
  );
}
