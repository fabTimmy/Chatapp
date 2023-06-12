import { useState } from "react";
import { auth, provider, googleProvider } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import React from "react";


const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisible] = useState("");
  const [isVisible, setIsVisible] = useState<string>("");

  const navigate = useNavigate();
  const inputType = visible ? "text" : "password";
  const inputTypes = isVisible ? "text" : "password";

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error);
      });

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(email, password);
    //   await firestore.collection('users').doc(user.uid).set({
    //     firstName,
    //     lastName,
    //     displayName: `${firstName} ${lastName}`,
    //   });
    // } catch (error) {
    //   console.error(error);
    // }

  };

  // sign in with google
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      console.log(result.user);
      navigate('/blogs')
    } catch (error) {
      console.log(error)
    }
  }
    // sign in with facebook
    const FacebookLogin = async () => {
      try {
        const result = await signInWithPopup(auth, provider)
        console.log(result.user)
        navigate('/feed')
        console.log(result.user.providerData)
      } catch (error) {
        console.log(error)
      }
    }

  const isMatch = password === confirmPassword;
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
          <form onSubmit={handleSubmit}>
            <h1>Register as a Writer/Reader</h1>
            
            <div className="names-cont">
              <div>
                <label htmlFor="First">First name</label>
                <input type="text" placeholder="First name" className="names" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="LastName">Last name</label>
                <input type="text" placeholder="Last name" className="names" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>
            <div className="names-cont-1">
              <label htmlFor="cars">You are joining as?</label>

              <select name="profession" id="profession">
                <option value="writer">Writer</option>
                <option value="blogger">Reader</option>
              </select>

              <label htmlFor="email">Email address</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="pwd">Password</label>
              <div className="pwd-cont">
                <input
                  placeholder="Create Password"
                  value={password}
                  type={inputType}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="eyes" onClick={() => setVisible(!visible)}>
                  {visible ? (
                    <AiOutlineEye className="eye-icon" />
                  ) : (
                    <AiOutlineEyeInvisible className="eye-icon" />
                  )}
                </div>
              </div>
              <label htmlFor="confirm-pwd">Confirm password</label>
              <div className="pwd-cont">
                <input
                  type={inputTypes}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  name="confirm_password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <p style={{color: isMatch ? 'green': 'red' , fontSize: 14}}>{isMatch ? 'Password Matched' : 'Password not match'}</p>
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
            <button type="submit" className="btn">
              Create account
            </button>
          </form>
          <div className="socials">
            <button onClick={GoogleLogin}>
              <FcGoogle className="nav-icon" />
              Sign up with google
            </button>
            <button className="fbb" onClick={FacebookLogin} onChange={() => navigate('/blogs')}>
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
