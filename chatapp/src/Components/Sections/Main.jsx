/* eslint-disable jsx-a11y/no-distracting-elements */
import { NavLink } from 'react-router-dom'

const Main = () => {
  return (
    <main id="home">
      <div className="main-sect">
        <div className="main-text">
          <marquee behavior="slide" direction="down" scrollamount='15'>
          <h1>Welcome to Z-chat: A Haven for Text-Based Content</h1>
          </marquee>
          <marquee behavior="slide" direction="up" scrollamount='15'>
            <div className="main-text">
          <p>
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers
          </p>

          <NavLink to="/signin" className="main-btn">
            Get started
          </NavLink>
            </div>

          </marquee>
        </div>
      </div>
    </main>
  )
}

export default Main