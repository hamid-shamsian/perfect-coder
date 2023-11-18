import NavList from "./NavList";

const Header = ({ user, onLogin, onLogout }) => {
  return (
    <header className='flex items-center gap-20 bg-blue-300 p-5'>
      <h2 className='font-bold'>Header of the App</h2>

      <NavList user={user} onLogin={onLogin} onLogout={onLogout} />
    </header>
  );
};

export default Header;
