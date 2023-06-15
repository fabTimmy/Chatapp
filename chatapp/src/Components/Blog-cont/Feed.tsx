import React from 'react'
import BlogNav from '../BlogNav'
import SearchBar from './SearchBar';


const Feed = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleFileUpload = (e: { target: { files: any[]; }; }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const file = e.target.files[0];
    // Handle file upload
  };

  return (
    <div className='feed-container'>
      <BlogNav />
      <div className="feed-sect">
        <SearchBar data={[]} />
      </div>
      <div>
      </div>
    </div>
  )
}

export default Feed