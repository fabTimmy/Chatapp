import { Link, NavLink } from "react-router-dom";
import { MdClose } from 'react-icons/md'
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/StoreHook";
import { signOut } from "firebase/auth";
import { auth } from "../../Config/firebase";
import { HiMenuAlt3 } from "react-icons/hi";


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
        <HiMenuAlt3 className="ham-menu" onClick={menuShow} />
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
          <li><NavLink to='/blogs/feed'>Blogs</NavLink></li>
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
                <p><img src="../../Image/unknownUser.png" alt="avatar"/></p>
              </div>
            )}
          </Link>
          <Link to='/signin'  type='submit' onClick={userSignout}><button className="btn btn-3">Log out</button></Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;

