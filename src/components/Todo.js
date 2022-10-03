import React from "react";
import { useState } from "react";
import NormalTodo from "./NormalTodo";
import EditTodo from "./EditTodo";

export default function Todo({
  todo,
  deleteTodoFromFirebase,
  updateDoneToFirebase,
  updateDataToFirebase,
}) {
  const [update, setUpdate] = useState(false);

  return (
    <div>
      {update ? (
        <EditTodo
          todo={todo}
          setUpdate={setUpdate}
          updateDataToFirebase={updateDataToFirebase}
        />
      ) : (
        <NormalTodo
          todo={todo}
          deleteTodoFromFirebase={deleteTodoFromFirebase}
          updateDoneToFirebase={updateDoneToFirebase}
          setUpdate={setUpdate}
        />
      )}
    </div>
  );
}
