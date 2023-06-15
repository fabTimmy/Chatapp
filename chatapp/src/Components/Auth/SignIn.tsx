import { useState } from "react";
import { auth } from "../../firebase";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import ResetPwd from "../ResetPwd";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState<true | false>(false);
  const [errors, setErrors] = useState("");
  const [resetPassword, setResetPassword] = useState(false);
  const [resetPasswordEmail, setResetPasswordEmail] = useState("");
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState<
    string | null
  >(null);
  const [resetPasswordError, setResetPasswordError] = useState<string | null>(
    null
  );

  const navigate = useNavigate();
  const inputType = visible ? "text" : "password";

  // sign in with email and password
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/feed");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/user-not-found") {
          setErrors("User not found");
        } else if (errorCode === "auth/wrong-password") {
          setErrors("Wrong Password");
        } else if (errorCode === "auth/invalid-email") {
          setErrors("Invalid Email/Password");
        } else if (errorCode === "auth/network-request-failed") {
          setErrors("No internet Connection");
        } else {
          setErrors(error.message);
        }
      });
  };

  const handlePasswordReset = async () => {
    if (!resetPasswordEmail.length) return;
    try {
      await sendPasswordResetEmail(auth, resetPasswordEmail);
      setResetPasswordSuccess(
        "Password reset email sent. Please check your inbox"
      );
      setResetPasswordError(null);
    } catch (error: any) {
      const errorMsg = error.message;
      setResetPasswordError(errorMsg);
      setResetPasswordSuccess(null);
    }
  };

  const toggleShowPwd = () => {
    setVisible(!visible);
  };
  return (
    <>
      <ResetPwd
        resetPasswordEmail={resetPasswordEmail}
        resetPasswordSuccess={resetPasswordSuccess}
        resetPasswordError={resetPasswordError}
        setResetPasswordEmail={setResetPasswordEmail}
        isOpen={resetPassword}
        onClose={() => setResetPassword(false)}
        handlePasswordReset={handlePasswordReset}
      />
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

          <div className="sign-up-cont-2">
            <div className="auth-router">
              <NavLink to="/signup" className="nav-route">
                REGISTER
              </NavLink>
              <NavLink to="/signin" className="nav-route nav-r-1">
                LOGIN
              </NavLink>
            </div>
            <form onSubmit={handleSubmit}>
              <h1>Welcome back</h1>
              <div className="err-dis">{errors && <p>{errors}</p>}</div>
              <div className="names-cont-2">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="email"
                />
                <label htmlFor="pwd">Password</label>
                <div className="pwd-cont">
                  <input
                    placeholder="Password"
                    type={inputType}
                    id="pwd"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="eyes" onClick={toggleShowPwd}>
                    {visible ? (
                      <AiOutlineEye className="eye-icon" />
                    ) : (
                      <AiOutlineEyeInvisible className="eye-icon" />
                    )}
                  </div>
                  <div className="forget-pwd">
                    <p onClick={() => setResetPassword(true)} className="f-pwd">
                      Forget Password?
                    </p>
                  </div>
                </div>
              </div>

              <button onClick={handleSubmit} type="submit" className="btn">
                Log in
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
