import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase";
import { BsBookmarks, BsSearch } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineMenu, AiOutlineTeam } from 'react-icons/ai';
import { MdOutlineAnalytics, MdOutlineDrafts, MdOutlineFeedback, MdOutlineNotificationsNone } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../Hooks/StoreHook";
import { signout } from "../Features/AuthSlice";
// import { useEffect } from "react";


const BlogNav = () => {

   

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
    <>
    <div className="blog-nav-cont">
      
      {/* <div className={`sidebar-cont ${navCollapse ? 'navcollapse' : '' }`}> */}
      <h3>Overview</h3>
      <div className="overview-cont">
        <NavLink to="/feed" className="overview-link feed-cont">
          <MdOutlineFeedback className="feed-icon" />
          <p>Feed</p>
        </NavLink>
        <NavLink to="/bookmark" className="overview-link bookmark-cont">
          <BsBookmarks className="bookmark-icon" />
          <p>Bookmarks</p>
        </NavLink>
        <NavLink to="/team-blog" className="overview-link team-blog-cont">
          <AiOutlineTeam className="team-blogs-icon" />
          <p>Team blogs</p>
        </NavLink>
        <NavLink to="/draft" className="overview-link draft-cont">
          <MdOutlineDrafts className="drafts-icon" />
          <p>Drafts</p>
        </NavLink>
        <NavLink to="/analytics" className="overview-link analytics-cont">
          <MdOutlineAnalytics className="analytics-icon" />
          <p>Analytics</p>
        </NavLink>
      </div>
      <div className="trending-cont">
        <div className="trend-tag-cont">
          <h2>Trending Tags</h2>
          <div className="trend-tag-icon"></div>
        </div>
        <div className="trending-links">
          <NavLink to="/programming" className="trending-link">
            Programming
          </NavLink>
          <NavLink to="/data-science" className="trending-link">
            Data science
          </NavLink>
          <NavLink to="/technology" className="trending-link">
            Technology
          </NavLink>
          <NavLink to="/machine-learning" className="trending-link">
            Machine learning
          </NavLink>
          <NavLink to="/Politics" className="trending-link">
            Politics
          </NavLink>
          <NavLink to="/see-all" className="see-all-link">
            See all
          </NavLink>
        </div>
      </div>
      <div className="personal-cont">
        <h2>Personal</h2>
        <div className="personal-links">
          <NavLink to="/account" className="personal-link acc-cont">
            <VscAccount className="account-icon" />
            Account
          </NavLink>
          <NavLink to="/notifications" className="personal-link notify-cont">
            <MdOutlineNotificationsNone className="notifications-icon" />
            Notifications
          </NavLink>
        </div>
      </div>
      <div className="logout">
        <button onClick={handleLogout}>Log out</button>
      </div>
      {/* </div> */}
    </div>
    </>
  );
};

export default BlogNav;
