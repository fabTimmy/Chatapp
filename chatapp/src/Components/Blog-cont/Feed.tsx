import { Link, NavLink, Outlet } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';


const Feed = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleFileUpload = (e: { target: { files: any[]; }; }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const file = e.target.files[0];
    // Handle file upload
  };

  return (
    <div className='feed-container'>
      <div className="article-cont">
        <div className="article">
          <div className="article-head">
            <div className="head-text">
            <h1>FEED</h1>
            <p>Explore different content you’d love </p>
            </div>
            <div>
              <Link to='/blogs/add-articles' className='head-btn'><BsPencil/> Post content</Link>
            </div>
          </div>
          <div className="article-route">
          <NavLink to='article' className='art-route'>For you</NavLink>
            <NavLink to='featured' className='art-route'>Featured</NavLink>
            <NavLink to='recent' className='art-route'>Recent</NavLink>
          </div>
          <div className="art-content">
            <Outlet />
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Feed