import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState('')
  const [errors, setErrors] = useState('');

  const navigate = useNavigate();
  const inputType = visible ? 'text' : 'password';

  // sign in with email and password
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/feed')
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          setErrors('User not found');
        }  else if(error.code === 'auth/wrong-password'){
          setErrors('Wrong Password');
        } else{
          setErrors(error.message);
        }
      });

    };
    const toggleShowPwd = () => {
      setVisible(!visible);
    }
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

    <div className="sign-up-cont-2">
      <div className="auth-router">
              <NavLink to='/signup' className='nav-route' >REGISTER</NavLink>
              <NavLink to='/signin' className='nav-route nav-r-1' >LOGIN</NavLink>
          </div>
      <form onSubmit={handleSubmit}>
        <h1>Welcome back</h1>
        <div className="err-dis" >
        {errors && <p>{errors}</p>}
        </div>
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
          {visible ? <AiOutlineEye className="eye-icon"/> : <AiOutlineEyeInvisible className="eye-icon"/>}
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
  );
};

export default SignIn;