import { useRef } from "react";

const Input = ({ onAdd }) => {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    const input = inputRef.current;

    if (input.value.trim()) {
      onAdd(input.value);
      input.classList.remove("invalid-input");
    } else {
      input.focus();
      input.classList.add("invalid-input");
    }

    input.value = "";
  };

  return (
    <div className='flex justify-between bg-white flex-1 p-2'>
      <input
        className='outline-none border-none flex-1'
        type='text'
        placeholder='New Todo'
        ref={inputRef}
        onKeyDown={e => e.key === "Enter" && handleSubmit()}
      />
      <button onClick={handleSubmit} className='bg-blue-600 text-white p-1'>
        Add
      </button>
    </div>
  );
};

export default Input;
