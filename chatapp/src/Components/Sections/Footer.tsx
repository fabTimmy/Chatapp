import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="foot-container">
          <div className="foot-logo">
          <div className="logo">Z-chat</div>
          </div>
          <div className="explore-cont">
            <h2>Explore</h2>
            <a href="#">Community</a>
            <a href="#">Trending blogs</a>
            <a href="#">Chatter for teams</a>
          </div>
          <div className="support-cont">
            <h2>Support</h2>
            <a href="#">Support docs</a>
            <a href="#">Join slack</a>
            <a href="#">Contact</a>
          </div>
          <div className="blog-cont">
            <h2>Official blog</h2>
            <a href="#">Official blog</a>
            <a href="#">Engineering blog</a>
          </div>
        </div>
      </footer>
  )
}

export default Footer