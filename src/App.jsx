import { useEffect, useState } from "react";
import Header from "./components/Header";
import { UserContext } from "./contexts/userContext";
import "./App.css";

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

const App = () => {
  const [user, setUser] = useState(loggedInUser);

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  }, [user]);

  const handleLogin = username => {
    // posting username to backend and authenticate the user...
    const userDataFromBackend = { id: 1, name: username };

    setUser(userDataFromBackend);
  };

  const handleLogout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user: user, onLogin: handleLogin, onLogout: handleLogout }}>
      <div className='bg-gray-600 h-screen'>
        <Header />

        <main className='flex justify-center items-center h-56 text-white'>Some Main Content...</main>
      </div>
    </UserContext.Provider>
  );
};

export default App;
