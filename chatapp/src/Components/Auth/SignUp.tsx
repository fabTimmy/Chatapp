import { useState } from "react";
import { auth, provider, googleProvider, db } from "../../Config/firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithPopup
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { setDoc, doc } from "firebase/firestore";
import { AiFillFacebook } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AuthForm, authFormSchema } from "../../Models/Form";
import { useDispatch } from "react-redux";
import { signin } from "../../Features/AuthSlice";
// import { useAppSelector } from "../../Hooks/StoreHook";
import { Bars } from "react-loader-spinner";

const SignUp = () => {
  const [visible, setVisible] = useState<true | false>(false);
  const [isVisible, setIsVisible] = useState<true | false>(false);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState<null | string>(null);

  const inputType = visible ? "text" : "password";
  const inputTypes = isVisible ? "text" : "password";

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  
  
  const handleFormSubmit = async (data: AuthForm) => {
    const { email, password } = data;
    try {
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
        );
        navigate("/signin");
      console.log(user);
      await setDoc(doc(db, "users", user.uid), { email });
      setLoading(false);

      if (user && user.email)
        dispatch(
          signin({
            email: user.email,
            id: user.uid,
            photoUrl: user.photoURL || null,
          })
        );
    } catch (error: any) {
      setLoading(false);
      const errorCode = error.code;
      if(errorCode === 'auth/email-already-in-use'){
        setIsError("Email is already registered")
      } else if (errorCode === 'auth/network-request-failed'){
        setIsError('No internet Connection');
      } else if (errorCode === 'auth/internal-error'){
        setIsError('No internet Connection');
      } else {
        setIsError(error.message);
      }
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthForm>({
    resolver: yupResolver(authFormSchema),
  });

  const fetchData = async () => {
    setLoading(true);
    await fetch('/').then(() => {
      // console.log('fetch success');
    });
      setLoading(false);
  };


  // sign in with google
  const GoogleLogin = async () => {
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      if (user && user.email)
        dispatch(
          signin({
            email: user.email,
            id: user.uid,
            photoUrl: user.photoURL || null,
          })
        );
      navigate("/blogs/feed/article");
      window.localStorage.getItems('isAuth', true)
    } catch (error: any) {
      const errorCode = error.code;
      if(errorCode === 'auth/email-already-in-use'){
        setIsError("Email is already registered")
      } else if (errorCode === 'auth/network-request-failed'){
        setIsError('No internet Connection');
      } else if (errorCode === 'auth/internal-error'){
        setIsError('No internet Connection');
      } else {
        setIsError(error.message);
      }
    }
  };
  // sign in with facebook
  const FacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      navigate("/blogs/feed/article");
      window.localStorage.getItems('isAuth', true)
      console.log(result.user.providerData);
    } catch (error: any) {
      const errorCode = error.code;
      if(errorCode === 'auth/email-already-in-use'){
        setIsError("Email is already registered")
      } else if (errorCode === 'auth/network-request-failed'){
        setIsError('No internet Connection');
      } else if (errorCode === 'auth/internal-error'){
        setIsError('No internet Connection');
      } else {
        setIsError(error.message);
      }
    }
  };

  return (
    <section>
      <div className="register-cont">
        <div className="signup-img">
          <div className="signup-img-text">
            <h1>CHATTER</h1>
            <p>
              Unleash the Power of Words, Connect with Like-minded Readers and
              Writers
            </p>
          </div>
        </div>
        <div className="sign-in-cont">
          <div className="auth-router">
            <NavLink to="/signup" className="nav-route">
              REGISTER
            </NavLink>
            <NavLink to="/signin" className="nav-route nav-r-1">
              LOGIN
            </NavLink>
          </div>
          <div className="err-dis-1">{isError && <p>{isError}</p>}</div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <h1>Register as a Writer/Reader</h1>

            <div className="names-cont">
              <div>
                <label htmlFor="First">First name</label>
                <input
                  type="text"
                  placeholder="First name"
                  className="names"
                  {...register("firstName")}
                />
                {errors.firstName ? (
                  <span className="yup-err">
                    {errors.firstName.message}
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <div>
                <label htmlFor="LastName" className="y-err-1">Last name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="names"
                  {...register("lastName")}
                />
                {errors.lastName ? (
                  <span className="yup-err y-err">
                    {errors.lastName.message}
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="names-cont-1">
              <label htmlFor="cars" className="y-err">You are joining as?</label>

              <select name="profession" id="profession">
                <option value="writer">Writer</option>
                <option value="blogger">Reader</option>
              </select>

              <label htmlFor="email">Email address</label>
              <input type="email" placeholder="Email" {...register("email")} />
              {errors.email ? (
                <span className="yup-err">
                  {errors.email.message}
                </span>
              ) : (
                <></>
              )}
              <label htmlFor="pwd">Password</label>
              <div className="pwd-cont">
                <input
                  placeholder="Create Password"
                  type={inputType}
                  {...register("password")}
                />
                {errors.password ? (
                  <span className="yup-err y-err">
                    {errors.password.message}
                  </span>
                ) : (
                  <></>
                )}
                <div className="eyes" onClick={() => setVisible(!visible)}>
                  {visible ? (
                    <AiOutlineEye className="eye-icon" />
                  ) : (
                    <AiOutlineEyeInvisible className="eye-icon" />
                  )}
                </div>
              </div>
              <label htmlFor="confirm-pwd" className="y-err">Confirm password</label>
              <div className="pwd-cont">
                <input
                  type={inputTypes}
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword ? (
                  <span className="yup-err">
                    {errors.confirmPassword.message}
                  </span>
                ) : (
                  <></>
                )}

                <div className="eyes" onClick={() => setIsVisible(!isVisible)}>
                  {isVisible ? (
                    <AiOutlineEye className="eye-icon" />
                  ) : (
                    <AiOutlineEyeInvisible className="eye-icon" />
                  )}
                </div>
              </div>
            </div>
            <br />
            <button onClick={fetchData} type="submit" className="btn">
              <div className="spinner" >
              {loading && <span><Bars
              width={20}
              height={20}
              color='black'
              /></span>}
              </div>
              {!loading && <span>Create account</span>}
            </button>
          </form>
          <div className="socials">
            <button onClick={GoogleLogin}>
              <FcGoogle className="nav-icon" />
              Sign up with google
            </button>
            <button
              className="fbb"
              onClick={FacebookLogin}
              onChange={() => navigate("/blogs")}
            >
              <AiFillFacebook className="fb" />
              Sign up with Facebook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
