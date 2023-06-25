import SideBar from "../Blog-cont/Global/SideBar";
import TopBar from "../Blog-cont/Global/TopBar";
import { Outlet } from "react-router-dom";


const Blogs = () => {
  return (
    <>
    <div className="blog">
      <div className="blog-sect">
        <div className="blog-container">
        <SideBar />
        <div className="blog-col">
      <TopBar data={[]} />
      <div className="blog-area">
        <Outlet />
      </div>
        </div>
        </div>
      </div>
    </div>
    {/* mobile */}
    <div className="blog-mob">
        <div className="blog-col-mob">
      <TopBar data={[]} />
      <div className="blog-area-mob">
        {/* <SideBar /> */}
        <Outlet />
      </div>
        </div>
    </div>
    </>
  );
};

export default Blogs;
