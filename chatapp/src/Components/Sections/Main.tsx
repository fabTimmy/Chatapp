import React from 'react'
import { NavLink } from 'react-router-dom'

const Main = () => {
  return (
        <main id="home">
        <div className="main-sect">
          <div className="main-text">
            <h1>Welcome to Chatter: A Haven for Text-Based Content</h1>
            <p>
              Unleash the Power of Words, Connect with Like-minded Readers and
              Writers
            </p>

            <NavLink to="/signin" className="main-btn">
              Get started
            </NavLink>
          </div>
        </div>
      </main>
  )
}

export default Main