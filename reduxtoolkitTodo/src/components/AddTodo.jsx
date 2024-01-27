import React, { useState } from "react";
import { addTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    if (input !== "") dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <div className="flex w-full items-center space-x-2 md:w-1/3">
        <form onSubmit={addTodoHandler} className="flex">
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Name todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button
            type="submit"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            AddTodo
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
