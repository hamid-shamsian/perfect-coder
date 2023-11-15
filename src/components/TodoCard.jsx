const TodoCard = ({ todo, onDelete, onToggleDone }) => {
  return (
    <div className='flex w-full gap-2'>
      <h2 className={`bg-white p-1 flex-1 flex items-center ${todo.done ? "line-through" : ""}`}>{todo.title}</h2>
      <button onClick={() => onToggleDone(todo.id)} className={`${todo.done ? "bg-green-500" : ""} text-black p-2`}>
        <i className='fa fa-check'></i>
      </button>
      <button onClick={() => onDelete(todo.id)} className='bg-red-700 text-white p-2'>
        <i className='fa fa-trash'></i>
      </button>
    </div>
  );
};

export default TodoCard;
