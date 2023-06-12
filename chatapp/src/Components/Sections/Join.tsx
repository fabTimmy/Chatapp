import React from 'react'
import { NavLink } from 'react-router-dom'

const Join = () => {
  return (
    <section className="join-us">
        <div className="join-us-container">
          <div className="join-us-img"></div>
          <div className="join-us-text">
            <p>
              "Chatter has become an integral part of my online experience. As a
              user of this incredible blogging platform, I have discovered a
              vibrant community of individuals who are passionate about sharing
              their ideas and engaging in thoughtful discussions.”
            </p>
            <h3>
              Adebobola Muhydeen, <span>Software developer at Apple</span>{" "}
            </h3>
            <NavLink to="/signup" className="main-btn" target="_blank">
              Join z-chat
            </NavLink>
          </div>
        </div>
      </section>
  )
}

export default Join