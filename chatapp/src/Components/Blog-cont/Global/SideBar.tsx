import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { auth } from "../../../Config/firebase";
import { BsBookmarks } from 'react-icons/bs';
import { AiOutlineTeam } from 'react-icons/ai';
import { MdOutlineAnalytics, MdOutlineDrafts, MdOutlineFeedback, MdOutlineManageAccounts, MdOutlineNotificationsNone } from "react-icons/md";
import { useAppDispatch } from "../../../Hooks/StoreHook";
import { CgLogOut } from 'react-icons/cg';
import { HiMenuAlt2 } from 'react-icons/hi'
import { signout } from "../../../Features/AuthSlice";

import { useState } from "react";
// import { useEffect } from "react";


const BlogNav = () => {
  const [open, setOpen] = useState(true);

  // const { user } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  // const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(signout());
  }

  // useEffect(() => {
  //   if(Boolean(!user)){
  //     navigate('/signin');
  //   }
  // }, [navigate, user])

  return (
    
    <div className={`blog-nav-cont ${open ? 'sidenocollapse' : 'sidecollapse'}`}>
      <div className='back-cont'  >
        <HiMenuAlt2 className='back' onClick={() => setOpen(!open)} />
      </div>
      <h3 className={`p-text ${!open ? 'p-m' : ''}`}>Overview</h3>
      <div className="overview-cont">
        <NavLink to="feed" className="overview-link feed-cont">
          <MdOutlineFeedback className={`feed-icon ${!open ? 'p-i' : ''}`} />
          <p className={`p-text ${!open ? 'p-nocollapse delay' : 'p-collapse nodelay-1'}`}>Feed</p>
          {/* <p className={`p-hover ${open && 'hid'}`}>Feed</p> */}
        </NavLink>
        <NavLink to="/bookmark" className="overview-link bookmark-cont">
          <BsBookmarks className={`bookmark-icon ${!open ? 'p-i' : ''}`} />
          <p className={`p-text ${!open ? 'p-nocollapse delay' : 'p-collapse nodelay-2'}`}>Bookmarks</p>
          {/* <p className={`p-hover ${open && 'hid'}`}>Bookmarks</p> */}
        </NavLink>
        <NavLink to="/team-blog" className="overview-link team-blog-cont">
          <AiOutlineTeam className={`team-blogs-icon ${!open ? 'p-i' : ''}`} />
          <p className={`p-text ${!open ? 'p-nocollapse delay' : 'p-collapse nodelay-3'}`}>Team blogs</p>
          {/* <p className={`p-hover ${open && 'hid'}`}>Team blogs</p> */}
        </NavLink>
        <NavLink to="/draft" className="overview-link draft-cont">
          <MdOutlineDrafts className={`drafts-icon ${!open ? 'p-i' : ''}`} />
          <p className={`p-text ${!open ? 'p-nocollapse delay' : 'p-collapse nodelay-4'}`}>Drafts</p>
          {/* <p className={`p-hover ${open && 'hid'}`}>Drafts</p> */}
        </NavLink>
        <NavLink to="/analytics" className="overview-link analytics-cont">
          <MdOutlineAnalytics className={`analytics-icon ${!open ? 'p-i' : ''}`} />
          <p className={`p-text ${!open ? 'p-nocollapse delay' : 'p-collapse nodelay-5'}`}>Analytics</p>
          {/* <p className={`p-hover ${open && 'hid'}`}>Analytics</p> */}
        </NavLink>
      </div>
      <div className="personal-cont">
        <h2 className={`p-text ${!open ? 'p-m' : ''}`}>Personal</h2>
        <div className="personal-links">
          <NavLink to="profile" className="personal-link acc-cont">
            <MdOutlineManageAccounts className="account-icon" />
            <p className={`p-text ${!open ? 'p-nocollapse delay' : 'p-collapse nodelay-6'}`}>Account</p>
            {/* <p className={`p-hover ${open && 'hid'}`}>Account</p> */}
          </NavLink>
          <NavLink to="/notifications" className="personal-link notify-cont">
            <MdOutlineNotificationsNone className={`notifications-icon ${!open ? 'p-i' : ''}`} />
            <p className={`p-text ${!open ? 'p-nocollapse delay' : 'p-collapse nodelay-7'}`} >Notifications</p>
            {/* <p className={`p-hover ${open && 'hid'}`}>Notifications</p> */}
          </NavLink>
          <div className="logout">
            <CgLogOut className="logout-icon" />
            <p onClick={handleLogout} className={`logout-btn p-text ${!open ? 'p-nocollapse delay' : 'p-collapse nodelay-8'}`}>Log out</p>
            {/* <p className={`p-hover ${open && 'hid'}`}>Log out</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNav;
