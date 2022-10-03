import React, { useEffect, useRef, useState } from "react";

import { Dialog } from "@headlessui/react";
import toast from "react-hot-toast";

export default function NewTodoForm({
  isOpen,
  setIsOpen,
  todoArray,
  addTodoToFirebase,
}) {
  const options = ["Category", "Work", "Personal", "Home", "Study"];

  const title = useRef(null);
  const desc = useRef(null);
  const category = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      title.current.value === "" ||
      desc.current.value === "" ||
      category.current.value === "Category"
    ) {
      toast.error("All fields must be filled");
    } else {
      const newTodo = {
        title: title.current.value,
        desc: desc.current.value,
        done: false,
        date: new Date(),
        category: category.current.value,
      };
      addTodoToFirebase(newTodo);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="w-1/2 rounded bg-white">
          <div className="mx-auto">
            <Dialog.Title className="font-serif font-semibold text-lg mt-4 ml-72">
              Create New Todo
            </Dialog.Title>
            <form className="flex flex-col px-8 pb-8 rounded-lg">
              <span className="text-lg font-serif font-semibold">Title:</span>
              <input
                ref={title}
                type="text"
                className="border border-2 rounded mb-4 h-8 py-1 px-1"
                placeholder=" Todo Title"
                //value={newTodo.title}
              />
              <span className="text-lg font-serif font-semibold">
                Description:
              </span>
              <textarea
                ref={desc}
                className="border border-2 mb-4 rounded px-1 py-1"
                placeholder="Todo Description"
                rows="4"
                //value={newTodo.desc}
              />
              <span className="text-lg font-serif font-semibold">
                Category:
              </span>
              <select className="mb-4 border border-2 rounded" ref={category}>
                {/* <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Other">Other</option> */}
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
              <button
                className="text-white bg-teal-800 hover:bg-teal-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium w-1/2 mx-auto"
                onClick={(e) => {
                  {
                    handleSubmit(e);
                  }
                }}
              >
                Add New Todo
              </button>
            </form>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
