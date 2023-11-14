import { useState, useEffect } from "react";
import Input from "./components/Input";
import Select from "./components/Select";
import Todos from "./components/Todos";
import "./App.css";

const existingTodos = JSON.parse(localStorage.getItem("todos")) ?? [];

const App = () => {
  const [todos, setTodos] = useState(existingTodos);

  const [category, setCategory] = useState("all");

  useEffect(() => localStorage.setItem("todos", JSON.stringify(todos)), [todos]);

  const handleAdd = todoTitle => {
    const newTodo = { title: todoTitle, done: false, id: Date.now() };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const handleDelete = id => {
    setTodos(prevTodos => prevTodos.filter(t => t.id !== id));
  };

  const handleToggleDone = id => {
    setTodos(prevTodos => prevTodos.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
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
