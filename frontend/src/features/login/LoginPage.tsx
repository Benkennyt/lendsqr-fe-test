import './LoginPage.scss'
import LeftSvg from '../../assets/svg/pablo-sign-in 1.svg';

import Logo from '../../assets/svg/logo.svg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev)
  }

  return (
    <main className="login-pg-cont">

      <div className="login-pg-svg-form">
        <div className="login-leftsvg">
          <div className="login-pg-lg logo">
            <Logo />
          </div>
          <LeftSvg />

        </div>
        <div className="login-form-cont">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <form>
            <div className="input-container ic2">
              <input id="email" className="input" type="text" placeholder=" " />
              <label htmlFor="email" className="placeholder">Email</label>
            </div>

            <div className="input-container ic2">
              <input id="password" className="input password" type={passwordVisible ? "text" :  "password"} placeholder=" " />
              <label htmlFor="password" className="placeholder">Password</label>
              <div onClick={togglePasswordVisibility} className="password-hide-show">{passwordVisible ? 'HIDE' : "SHOW"}</div>
            </div>
            <a href="">FORGOT PASSWORD?</a>
            <button onClick={() => navigate('/dashboard')}>LOG IN</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default LoginPage