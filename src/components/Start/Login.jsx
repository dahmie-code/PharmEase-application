import './Form.css';
import LoginImg from "../../assets/signIn.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FormInput, EyeIcon } from "./common";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Remember Me: ", rememberMe);
  };

  return (
    <div className="form-container">
      <div className="form">
        <h2>Welcome Back!</h2>
        <p>Please enter your details below.</p>
        <form action="" onSubmit={handleSubmit}>
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
        <p className="noAccount">Don't have an account? <Link to="/">Sign up</Link></p>
      </div>
      <div className="form-image">
        <img src={LoginImg} alt="Login" />
      </div>
    </div>
  );
};

export default Login;