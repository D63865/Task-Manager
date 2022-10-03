import React, { useRef } from "react";
import toast from "react-hot-toast";

export default function EditTodo({ todo, setUpdate, updateDataToFirebase }) {
  const options = ["Category", "Work", "Personal", "Home", "Study"];

  options.splice(options.indexOf(todo.category), 1);
  options.unshift(todo.category);
 

  const title = useRef(todo.title);
  const desc = useRef(todo.desc);
  const category = useRef(todo.category);

  function handleUpdate() {
    if (title.current.value !== "") {
      todo = { ...todo, title: title.current.value };
    }
    else{
      todo=todo.title;
    }
    if (desc.current.value !== "") {
      todo = { ...todo, desc: desc.current.value };
    }
    else{
      todo=todo.desc;
    }
    const newTodo = {
      id: todo.id,
      title: title.current.value,
      desc: desc.current.value,
      done: false,
      date: new Date(),
      category: category.current.value,
    };

    updateDataToFirebase(newTodo);
    setUpdate(false);
  }

  return (
    <div className="max-w-6xl mx-auto flex justify-between px-4 py-4 bg-emerald-200 shadow-xl mt-6 rounded-lg border-2 border-emerald-600">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl font-bold">Title: </h4>
          <input
            ref={title}
            type="text"
            placeholder={todo.title}
            className="h-8 ml-4 ml-2 rounded p-2"
          />
        </div>

        <div className="ml-12">
          <h4 className="text-xl font-bold">Description: </h4>
          <textarea
            ref={desc}
            placeholder={todo.desc}
            className="ml-2 h-16 w-80 rounded  p-2"
            rows="4"
          ></textarea>
        </div>
      </div>
      <div className="flex">
        <div className="bg-teal-100  py-2 mr-4 w-96 px-2 mt-4 h-24">
          <select className=" border rounded  w-full mt-8" ref={category}>
            {options.map((option) => {
              return (
                <option
                  key={option}
                  //value={option}
                >
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div className="p-4">
          <button
            onClick={() => {
              handleUpdate();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="green"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            <div>
              <button
                className="mt-4"
                onClick={() => {
                  setUpdate(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="red"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
