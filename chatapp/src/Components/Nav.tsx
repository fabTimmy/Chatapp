import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdClose } from 'react-icons/md'
import { useState } from "react";


const Nav = () => {
  const [active, setActive] = useState(false);

  const menuShow = () => {
    setActive(!active)
  }

  return (
    <div className="header">
      <div className="menu-icon">
        <div className="logo-1">Z-chat</div>
        <RxHamburgerMenu className="ham-menu" onClick={menuShow} />
      </div>
      <nav className={active ? 'slider active' : 'slider'} >
        <div className="logo">Z-chat</div>
        <ul className="nav-links">
          <div className="close-icon">
            <MdClose className="ham-close" onClick={menuShow} />
          </div>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About us</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><NavLink to='/blogs'>Blogs</NavLink></li>
        </ul>
        <div className="nav-btn">
          <NavLink to='/signin'><button className="btn btn-1">Log in</button></NavLink>
          <NavLink to='/signup'><button className="btn btn-2">Sign up</button></NavLink>


        </div>
      </nav>
    </div>
  );
};

export default Nav;
