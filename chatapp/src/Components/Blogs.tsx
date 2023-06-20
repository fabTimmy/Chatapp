import Nav from "./Nav";
import BlogNav from "./BlogNav";


const Blogs = () => {
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
