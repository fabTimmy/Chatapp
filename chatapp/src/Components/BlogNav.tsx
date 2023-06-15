import React from "react";
import { NavLink } from "react-router-dom";

const BlogNav = () => {
  return (
    <div className="blog-nav-cont">
      <h1>Z-chat</h1>
      <h3>Overview</h3>
      <div className="overview-cont">
        <NavLink to="/feed" className="overview-link feed-cont">
          <div className="feed-icon"></div>
          Feed
        </NavLink>
        <NavLink to="/bookmark" className="overview-link bookmark-cont">
          <div className="bookmark-icon"></div>
          Bookmarks
        </NavLink>
        <NavLink to="/team-blog" className="overview-link team-blog-cont">
          <div className="team-blogs-icon"></div>
          Team blogs
        </NavLink>
        <NavLink to="/draft" className="overview-link draft-cont">
          <div className="drafts-icon"></div>
          Drafts
        </NavLink>
        <NavLink to="/analytics" className="overview-link analytics-cont">
          <div className="analytics-icon"></div>
          Analytics
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
            <div className="account-icon"></div>
            Account
          </NavLink>
          <NavLink to="/notifications" className="personal-link notify-cont">
            <div className="notifications-icon"></div>
            Notifications
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BlogNav;
