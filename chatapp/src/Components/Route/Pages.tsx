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
import { useAppDispatch } from "../../Hooks/StoreHook";
import { signin } from "../../Features/AuthSlice";
import AddArticles from "../Articles/AddArticles";
import Profile from "../Scenes/Profile";
import Articles from "../Articles/Articles";

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
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
        {/* nested routes */}
        <Route path="/blogs" element={<Blogs />} >
        <Route path="profile" element={<Profile />} />
        <Route path="add-articles" element={<AddArticles />} />
        {/* nested feed routes start */}
        <Route path="feed" element={<Feed />}>
        <Route path="article" element={<Articles />} />
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
