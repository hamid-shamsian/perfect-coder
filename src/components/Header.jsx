import NavList from "./NavList";

const Header = () => {
  return (
    <header className='flex items-center gap-20 bg-blue-300 p-5'>
      <h2 className='font-bold'>Header of the App</h2>

      <NavList />
    </header>
  );
};

export default Header;
