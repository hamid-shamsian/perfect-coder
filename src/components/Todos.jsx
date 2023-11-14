import TodoCard from "./TodoCard";

const Todos = ({ todos, onDelete, onToggleDone, category }) => {
  const count = todos.length;

  return (
    <div className='flex flex-col gap-5 p-3'>
      {count ? (
        <p>
          Showing {count} {category !== "all" && category} Todo{count > 1 && "s"}:
        </p>
      ) : (
        <p className='text-center'>You have no {category !== "all" && category} Todos!</p>
      )}
      {todos.map(todo => (
        <TodoCard key={todo.id} todo={todo} onDelete={onDelete} onToggleDone={onToggleDone} />
      ))}
    </div>
  );
};

export default Todos;
