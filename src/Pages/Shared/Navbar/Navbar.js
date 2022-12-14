import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import profile from '../../../Portfolio/profile.png';
import './Navbar.css';

const Navbar = () => {

    const menu = 
    <> 
    <li> <NavLink to="/home"> Home </NavLink> </li>
    <li> <NavLink to="/aboutme"> About Me </NavLink> </li>
    <li> <NavLink to="/blog"> Blog </NavLink> </li>
    <li> <a href='https://drive.google.com/file/d/1YyFtHDR_23-DhD2l7oGuF5_9Tg0vANNS/view?usp=share_link'> Resume</a> </li>
    <li> <NavLink to='/contact' > Contact Me  </NavLink> </li>
    </>

    return (
 <div>
 <div className="navbar shadow-lg bg-base-100 py-3 lg:px-14 md:px-7 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
         {menu}
      </ul>
  </div>
    <img src={profile} className='lg:w-12 lg:h-12 w-16 h-16 rounded-full' alt='profile' />
    <Link to="/" className="btn btn-ghost normal-case text-xl">Ashrafull</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1"> 
     {menu}
    </ul>
  </div>

  </div>
   </div>
 );
};

export default Navbar;