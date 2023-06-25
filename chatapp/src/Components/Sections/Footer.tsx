import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <div className="foot-container">
        <div className="foot-logo">
          <div className="logo">Z-chat</div>
        </div>
        <div className="explore-cont">
          <h2>Explore</h2>
          <Link to='/community'>Community</Link>
          <Link to='/team'>Z-Chat for teams</Link>
        </div>
        <div className="support-cont">
          <h2>Support</h2>
          <Link to='/support'>Support docs</Link>
          <Link to='/slack'>Join slack</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className="blog-cont">
          <h2>Official blog</h2>
          <Link to='/official_blog'>Official blog</Link>
          <Link to='/engineering_blog'>Engineering blog</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer