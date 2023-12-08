import { useState, useEffect } from "react";

import "./App.css";
import { TodoForm, TodoItem } from "./components";
import { TodoProvider } from "./Context";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevtodos) => [{ id: Date.now(), ...todo }, ...prevtodos]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prevtodos) => {
      return prevtodos.map((el) => (el.id === id ? todo : el));
    });
  };
  const delTodo = (id) => {
    setTodos((prevtodos) => prevtodos.filter((el) => el.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevtodos) => {
      return prevtodos.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      );
    });
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length) {
      setTodos(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, delTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((el) => {
              return (
                <div className="w-full" key={el.id}>
                  <TodoItem todo={el} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
