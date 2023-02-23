import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Form.css';
import LoginImg from "../../assets/signIn.jpg";
import { FormInput, EyeIcon } from "./common";

// const navigate = useNavigate();
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false));

  const users = [{ email: "test@email.com", password: "testpassword" }];

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const account = users.find((user) => user.email=== email);
   if (account && account.password === password) {
   setauthenticated(true)
    localStorage.setItem("authenticated", true);
    navigate("maincontainer");
    }
   };
  // const handleLogin = useNavigate();
  // handleLogin("/main");  

  return (
    <div className="form-container">
      <div className="form">
        <h2>Welcome Back!</h2>
        <p>Please enter your details below.</p>
        <form onSubmit={handleSubmit}>
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
        <p className="noAccount">Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
      <div className="form-image">
        <img src={LoginImg} alt="Login" />
      </div>
    </div>
  );
};

export default Login;