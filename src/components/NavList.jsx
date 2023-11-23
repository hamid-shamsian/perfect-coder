import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";

const NavList = () => {
  const { user, onLogin, onLogout } = useContext(UserContext);

  const [inputValue, setInputValue] = useState("");

  const validateInput = () => {
    if (inputValue.trim()) onLogin(inputValue);
    setInputValue("");
  };

  return (
    <div className='flex-1 flex justify-between items-center'>
      <ul className='flex gap-7'>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>

      <div className='flex items-center gap-10'>
        {user ? (
          <>
            <span className='font-bold'>Hello {user.name}!</span>
            <button className='bg-red-500 p-2 text-white' onClick={onLogout}>
              LOGOUT
            </button>
          </>
        ) : (
          <>
            <input className='p-1' type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button className='bg-blue-500 p-2 text-white' onClick={validateInput}>
              LOGIN
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavList;
