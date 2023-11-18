import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = username => {
    // posting username to backend and authenticate the user...
    const userDataFromBackend = { id: 1, name: username };

    setUser(userDataFromBackend);
  };

  const handleLogout = () => setUser(null);

  return (
    <div className='bg-gray-600 h-screen'>
      <Header user={user} onLogin={handleLogin} onLogout={handleLogout} />

      <main className='flex justify-center items-center h-56 text-white'>Some Main Content...</main>
    </div>
  );
};

export default App;
