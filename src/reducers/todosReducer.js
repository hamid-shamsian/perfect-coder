const todosReducer = (prevTodos, action) => {
  switch (action.type) {
    case "ADD":
      return [...prevTodos, action.payload];
    case "DELETE":
      return prevTodos.filter(t => t.id !== action.payload);
    case "TOGGLE_DONE":
      return prevTodos.map(t => (t.id === action.payload ? { ...t, done: !t.done } : t));
    default:
      return prevTodos;
  }
};

export default todosReducer;
