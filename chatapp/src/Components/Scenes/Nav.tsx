import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdClose } from 'react-icons/md'
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/StoreHook";
import { signOut } from "firebase/auth";
import { auth } from "../../Config/firebase";


const Nav = () => {
  const [active, setActive] = useState(false);

  const { user } = useAppSelector((state) => state.auth)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useAppDispatch()
  const menuShow = () => {
    setActive(!active)
  }
  const userSignout = async () => {
   await signOut(auth);
    // dispatch(signOut());
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
          <li><NavLink to='/blogs/feed/article'>Blogs</NavLink></li>
        </ul>
        <div className="nav-btn">
          {!user ? (
            <>
            <NavLink to='/signin'><button className="btn btn-1">Log in</button></NavLink>
            <NavLink to='/signup'><button className="btn btn-2">Sign up</button></NavLink>
            </>
          ) : (
            <>
            <Link to="/profile">
            {user?.photoUrl ? (
              <img src={user?.photoUrl} alt="" className="photourl" />
            ) : (
              <div className="picurl">
                <p>{user?.email[0].toUpperCase()}</p>
              </div>
            )}
          </Link>
          <button  type='submit' onClick={userSignout}className="btn btn-3">Log out</button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;

