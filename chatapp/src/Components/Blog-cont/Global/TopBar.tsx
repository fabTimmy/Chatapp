import React, { useState } from "react";
import { BsBookmarks, BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useAppSelector } from "../../../Hooks/StoreHook";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineAnalytics, MdOutlineDrafts, MdOutlineFeedback, MdOutlineManageAccounts, MdOutlineNotificationsNone } from "react-icons/md";
import { AiOutlineHome, AiOutlineTeam } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";

interface Item {
  id: number;
  name: string;
}

interface Props {
  data: Item[];
}

const SearchBar: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);

  const { user } = useAppSelector((state) => state.auth);

  const menuShow = () => {
    setActive(!active)
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleLogout = () => {

  }

  return (
    <>
      <div className="search-bar">
        <div className="head">
          <Link to="/" className="search-logo">
            <h1>Z-chat</h1>
          </Link>
        </div>
        <div className="search-cont">
          <div className="search-input">
            <input
              type="text"
              placeholder="Search chatter"
              value={query}
              onChange={handleSearch}
              className="search-bd"
            />
            <BsSearch className="search-icon" />
          </div>
        </div>
        <div className="alarm-cont">
          <IoMdNotificationsOutline className="alarm-icon" />
          {user ? (
            <Link to="/profile">
              {user?.photoUrl ? (
                <img src={user?.photoUrl} alt="" />
              ) : (
                <div><img src="../../../Image/unknownUser.png" alt="avatar" /></div>
              )}
            </Link>
          ) : (
            <></>
          )}
        </div>
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      {/* mobile */}
      <div className="search-bar-mob">
        <div className="head">
          <div className="back-cont">
            <HiMenuAlt2 className="back" onClick={menuShow} />
          </div>
        </div>
        <div className="search-cont">
          <div className="search-input">
            <input
              type="text"
              placeholder="Search chatter"
              value={query}
              onChange={handleSearch}
              className="search-bd-mob"
            />
            <BsSearch className="search-icon-mob" />
          </div>
        </div>
        <div className="alarm-cont">
          <IoMdNotificationsOutline className="alarm-icon" />
          {user ? (
            <Link to="/profile">
              {user?.photoUrl ? (
                <img src={user?.photoUrl} alt="" />
              ) : (
                <div><img src="../../../Image/unknownUser.png" alt="avatar" /></div>
              )}
            </Link>
          ) : (
            <></>
          )}
        </div>
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <div className="slide-bg" style={{ transform: `translateX(${active ? "0%" : "-100%"})`, transition: '.3s ease all' }}>
          <nav className={active ? 'slide active' : 'slide'}>
            <div className='blog-side-cont  '>
              <Link to="/" className="search-logo">
                <h1>Z-chat</h1>
              </Link>
              <h2 className='p-text-mob'>Overview</h2>
              <div className="overview-cont-side">
                <NavLink to="feed" className="overview-link-mob feed-cont">
                  <MdOutlineFeedback className='feed-icon' />
                  <p className='p-text-mob'>Feed</p>
                </NavLink>
                <NavLink to="/bookmark" className="overview-link-mob bookmark-cont">
                  <BsBookmarks className='bookmark-icon' />
                  <p className='p-text-mob'>Bookmarks</p>
                </NavLink>
                <NavLink to="/team-blog" className="overview-link-mob team-blog-cont">
                  <AiOutlineTeam className='team-blogs-icon' />
                  <p className='p-text-mob'>Team blogs</p>
                </NavLink>
                <NavLink to="/draft" className="overview-link-mob draft-cont">
                  <MdOutlineDrafts className='drafts-icon' />
                  <p className='p-text-mob'>Drafts</p>
                </NavLink>
                <NavLink to="/analytics" className="overview-link-mob analytics-cont">
                  <MdOutlineAnalytics className='analytics-icon' />
                  <p className='p-text-mob'>Analytics</p>
                </NavLink>
              </div>
              <div className="personal-cont">
                <h2 className='p-text-mob'>Personal</h2>
                <div className="personal-links">
                  <NavLink to="profile" className="personal-link-mob acc-cont">
                    <MdOutlineManageAccounts className="account-icon" />
                    <p className='p-text-mob'>Account</p>
                  </NavLink>
                  <NavLink to="/notifications" className="personal-link-mob notify-cont">
                    <MdOutlineNotificationsNone className='notifications-icon' />
                    <p className='p-text-mob' >Notifications</p>
                  </NavLink>
                  <div className="logout">
                    <CgLogOut className="logout-icon" />
                    <p onClick={handleLogout} className='logout-btn p-text-mob'>Log out</p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
