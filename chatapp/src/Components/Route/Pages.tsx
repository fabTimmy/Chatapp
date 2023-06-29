import PageNotFound from "../../ErrorPage/PageNotFound";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import Home from "../Scenes/Home";
import { Routes, Route } from "react-router-dom";
import About from "../Sections/About";
import Contact from "../Scenes/Contact";
import Blogs from "../Scenes/Blogs";
import { AuthProvider } from "../Context/AuthContext";
import { PrivateRoute } from "./PrivateRoute";
import Feed from "../Blog-cont/Feed";
import { useEffect } from "react";
import { auth } from "../../Config/firebase";
import { useAppDispatch} from "../../Hooks/StoreHook";
import { signin } from "../../Features/AuthSlice";
import Profile from "../Blog-cont/Profile";
import Articles from "../Articles/Articles";
import Analytics from "../Blog-cont/Analytics";
import Drafts from "../Blog-cont/Drafts";
import Bookmark from "../Blog-cont/Bookmark";
import TeamBlog from "../Blog-cont/TeamBlog";
import Notification from "../Blog-cont/Notification";

const Pages = () => {
  const dispatch = useAppDispatch();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user && user.email)
        dispatch(
          signin({
            email: user.email,
            id: user.uid,
            photoUrl: user?.photoURL || null,
          })
        );
    });

    return unsubscribe();
  }, [dispatch]);

  return (
    <AuthProvider>
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
        {/* nested routes */}
        <Route path="/blogs" element={<Blogs />} >
        <Route path="analytics" element={<Analytics />} />
        <Route path="profile" element={<Profile />} />
        <Route path="draft" element={<Drafts />} />
        <Route path="bookmark" element={<Bookmark />} />
        <Route path="team-blog" element={<TeamBlog />} />
        <Route path="notifications" element={<Notification />} />
        {/* nested feed routes start */}
        <Route path="feed" element={<Feed />}>
        <Route path="article" element={<Articles  />} />
        </Route>
        {/* nested feed routes end */}
        </Route>
        <Route element={<PrivateRoute />}>
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default Pages;
