import { useEffect, useState } from "react";
import TodoForm from "./component/TodoForm";
import { TodoProvider } from "./contexts";
import TodoItem from "./component/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleCompleted = (id) => {
    console.log(id);
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log(todos);
  }, [todos]);

  return (
    <TodoProvider
      value={{ addTodo, todos, removeTodo, toggleCompleted, updateTodo }}
    >
      <h1 className="p-4 underline font-bold text-3xl bg-gray-600 dark:text-white">
        TO DO APP WITH REACT & TAILWIND & CONTEXT API
      </h1>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos &&
              todos.map((todo) => (
                <div className="w-full" key={todo.id}>
                  <TodoItem todo={todo} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
