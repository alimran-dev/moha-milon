import { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {
  const { user, setUser, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        setUser(null);
        navigate('/login');
    })
      .catch(error => {
      console.error(error)
    })
  }
  const navItems = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/login'}>Login</NavLink>
      </li>
      <li>
        <NavLink to={'/registration'}>Sign Up</NavLink>
      </li>
      <li>
        <NavLink to={'orders'}>Orders</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-14">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-1"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Moha Milon</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2 font-semibold">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {
          user ? <>
            <span className="pr-4">{user.email}</span>
            <button onClick={handleSignOut} className="btn">Sign Out</button>
          </> :
            <Link to={'/login'} className="btn">Login</Link>
        }
      </div>
    </div>
  );
};

export default NavBar;
