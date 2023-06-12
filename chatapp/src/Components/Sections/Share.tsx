import React from 'react'
import { NavLink } from 'react-router-dom'

const Share = () => {
  return (
    <section className="share">
        <div className="share-container">
          <div className="share-img-cont">
            <div className="share-img-1"><img src="../Image/unsplash_ZHvM3XIOHoE.jpg" alt="" /></div>
            <div className="share-img-2"></div>
            <div className="share-img-3"></div>
          </div>
          <div className="share-text">
            <h1>Write, read and connect with great minds on chatter</h1>
            <p>
              Share people your great ideas, and also read write-ups based on
              your interests. connect with people of same interests and goals{" "}
            </p>
            <NavLink to="/signin" className="main-btn">
              Get started
            </NavLink>
          </div>
        </div>
      </section>
  )
}

export default Share