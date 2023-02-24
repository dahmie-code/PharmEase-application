import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Form.css';
import LoginImg from "../../assets/signIn.jpg";
import LogoImg from "../../assets/signUplogo.png";
import { FormInput, EyeIcon } from "./common";

// const navigate = useNavigate();
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);


  const users = [{ email: "test@email.com", password: "testpassword" }];

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = (e) => { // Define handleLogin function
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      localStorage.setItem("authenticated", true);
      navigate('/dashboard'); // Navigate to dashboard
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="form-container">
      <div className="form">
      <div className="logo"><img src= {LogoImg} alt="logo" /></div>
        <h2>Welcome Back!</h2>
        <p>Please enter your details below.</p>
        <form onSubmit={handleLogin}>
        <FormInput
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="password-input">
          <FormInput
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <EyeIcon
              showPassword={showPassword}
              handleShowPassword={handleShowPassword}
            />


          </div>
          <div className="form-options">
              <label htmlFor="rememberMe" className="label">                
                Remember Me
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMe}
                />
              </label>
              <a href="#forgotPassword" target="_blank" rel="noopener noreferrer">Forgot Password?</a>
            </div>
            <button type="submit">Log in</button>
        </form>
        <p className="account">Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
      <div className="form-image">
        <img src={LoginImg} alt="Login" />
      </div>
    </div>
  );
};

export default Login;