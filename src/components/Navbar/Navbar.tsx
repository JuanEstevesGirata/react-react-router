import { Link } from 'react-router-dom';

export interface NavbarInterface {}

const Navbar : React.FC<NavbarInterface> = () => {
	return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
    </nav>
  );
};
export default Navbar;
