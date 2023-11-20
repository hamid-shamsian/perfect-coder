import { createContext, useState } from "react";
import Header from "./components/Header";
import { UserContext } from "./contexts/userContext";
import "./App.css";

const ThemeContext = createContext();
ThemeContext.displayName = "ThemeContext";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = username => {
    // posting username to backend and authenticate the user...
    const userDataFromBackend = { id: 1, name: username };

    setUser(userDataFromBackend);
  };

  const handleLogout = () => setUser(null);

  // value is not important here!  👇👇  its just for showing another provider wrapping the previous provider.
  return (
    <ThemeContext.Provider value={"dark"}>
      <UserContext.Provider value={{ user: user, onLogin: handleLogin, onLogout: handleLogout }}>
        <div className='bg-gray-600 h-screen'>
          <Header user={user} onLogin={handleLogin} onLogout={handleLogout} />

          <main className='flex justify-center items-center h-56 text-white'>Some Main Content...</main>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
