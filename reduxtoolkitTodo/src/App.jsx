import { createContext, useContext, useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

export const TodoContext = createContext(null);
export const TodoProvider = TodoContext.Provider;
export const useTodo = () => {
  return useContext(TodoContext);
};

function App() {
  const [isUpdate, setisUpdate] = useState(false);
  const [todo, setTodo] = useState("");

  return (
    <TodoProvider value={{ isUpdate, setisUpdate, todo, setTodo }}>
      <div className="w-full m-4 max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 ">
        <h1 className="p-4 text-3xl capitalize">
          learn about redux toolkit
        </h1>
        <div className="mb-4">
          <AddTodo />
        </div>
        <div className="flex flex-wrap gap-y-3">
          <Todos />
        </div>
      </div>
      {/* <h1 className="p-4 text-3xl text-capitalize">
        learn about redux toolkit
      </h1>
      <div className="flex-col flex gap-4 place-items-center ">
        <AddTodo />
        <Todos />
      </div> */}
    </TodoProvider>
  );
}

export default App;
