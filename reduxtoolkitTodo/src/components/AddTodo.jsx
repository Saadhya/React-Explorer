import React, { useContext, useEffect, useState } from "react";
import { addTodo, updateTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";
import { useTodo } from "../App";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { isUpdate, todo, setTodo } = useTodo();

  const addTodoHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    if (input !== "") {
      console.log(todo);
      if (isUpdate) {
        setTodo(todo.id, { text: input });
        dispatch(updateTodo(todo));
      } else dispatch(addTodo(input));
    }

    setInput("");
  };

  useEffect(() => {
    isUpdate ? setInput(todo.text) : setInput("");
    // console.log(todo);
  }, [todo]);

  return (
    <div>
      <div className="w-full flex items-center space-x-2 md:w-5/6">
        <form onSubmit={addTodoHandler} className="flex">
          <input
            className="flex h-10 w-100 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Name todo"
            value={input}
            // value={isUpdate ? todo : input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button
            type="submit"
            className="rounded-md w-100 bg-black px-3 py-2 ml-4 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {isUpdate ? "UpdateTodo" : "AddTodo"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
