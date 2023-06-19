import PageNotFound from "../ErrorPage/PageNotFound";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import About from "./Sections/About";
import Contact from "./Contact";
import Blogs from "./Blogs";
import { AuthProvider } from "./Context/AuthContext";
import { PrivateRoute } from "../PrivateRoute";
import Feed from "./Blog-cont/Feed";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useAppDispatch } from "../Hooks/StoreHook";
import { signin } from "../Features/AuthSlice";


const Pages = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if(user && user.email) dispatch(signin({
        email: user.email,
        id: user.uid,
        photoUrl: user?.photoURL || null,
      }))
    }) 

    return unsubscribe();
  }, [dispatch])

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feed" element={<Feed />} />
        <Route element={<PrivateRoute />} >
          <Route path="/blogs" element={<Blogs />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default Pages;
