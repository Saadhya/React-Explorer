import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todoSlice";
import { Edit, Edit2,Trash } from "lucide-react";
import { useTodo } from "../App";

const Todos = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const { isUpdate, todo, setTodo, setisUpdate } = useTodo();

  const handleUpdateTodo = (e) => {
    dispatch(updateTodo(input));
    setInput("");
  };

  const toggleTodo = (val) => {
    // console.log(val);
    // setIsTodoEditable((prev) => !prev);
    //   setTodo(val.text);
    // console.log(isTodoEditable);
    if (!isTodoEditable) {
      setIsTodoEditable(true);
      setisUpdate(true);
      setTodo(val);
      // handleUpdateTodo(val);
    } else {
      setisUpdate(false);
      setIsTodoEditable(false);
      setTodo("");
    }
  };

  return (
    <>
      {/* <ul className="rounded-md bg-purple w-5/6 ml-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"> */}
      {todos && todos.map((todo) => (
        <div
          className={` w-full border capitalize border-black/10 text-2xl bg-[#c6e9a7] rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black`}
          key={todo.id}
        >
          {todo.text}
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className=" rounded-md float-right bg-black ml-1 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
              <Trash className="h-4 w-4" />
          </button>
          <button
            // onClick={(E) => setIsTodoEditable((prev)=>!prev)}
            onClick={() => toggleTodo(todo)}
            key={todo.id}
            // disabled={isTodoEditable}
            className=" rounded-md float-right bg-black ml-1 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {isTodoEditable ? (
              <Edit className="h-4 w-4" />
            ) : (
              <Edit2 className="h-4 w-4" />
            )}
          </button>
        
        </div>
      ))}
      {/* </ul> */}
    </>
  );
};

export default Todos;
