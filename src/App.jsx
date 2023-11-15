import { useState, useEffect, useReducer } from "react";
import Input from "./components/Input";
import Select from "./components/Select";
import Todos from "./components/Todos";
import todosReducer from "./reducers/todosReducer";
import "./App.css";

const existingTodos = JSON.parse(localStorage.getItem("todos")) ?? [];

const App = () => {
  const [todos, dispatchTodos] = useReducer(todosReducer, existingTodos);

  const [category, setCategory] = useState("all");

  useEffect(() => localStorage.setItem("todos", JSON.stringify(todos)), [todos]);

  const handleAdd = todoTitle => {
    const newTodo = { title: todoTitle, done: false, id: Date.now() };
    dispatchTodos({ type: "ADD", payload: newTodo });
  };

  const handleDelete = id => {
    dispatchTodos({ type: "DELETE", payload: id });
  };

  const handleToggleDone = id => {
    dispatchTodos({ type: "TOGGLE_DONE", payload: id });
  };

  const handleChangeCategory = cat => setCategory(cat);

  const filteredTodos = category === "all" ? todos : todos.filter(t => (category === "done" ? t.done : !t.done));

  return (
    <div className='w-96 mx-auto mt-10 bg-gray-300'>
      <div className='flex gap-2 p-3'>
        <Input onAdd={handleAdd} />
        <Select value={category} onChangeValue={handleChangeCategory} />
      </div>

      <Todos todos={filteredTodos} onDelete={handleDelete} onToggleDone={handleToggleDone} category={category} />
    </div>
  );
};

export default App;
