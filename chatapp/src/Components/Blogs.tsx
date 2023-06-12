import React from "react";
import Nav from "./Nav";
import BlogNav from "./BlogNav";


const Blogs = () => {
  // console.log(user)
  return (
    <div className="blog">
      <Nav />
      <div className="blog-sect">
        <BlogNav />
        <div className="blog-cont">
        </div>
      </div>
    </div>
  );
};

export default Blogs;
