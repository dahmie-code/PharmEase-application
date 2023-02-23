import "./Form.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import SignUpImg from "../../assets/signUp.jpg";
import { FormInput, EyeIcon } from "./common";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password: ", password);
  };

  return (
    <div className="form-container">
      <div className="form">
        <h2>Hi there!</h2>
        <p>Please set up your account.</p>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            id="email"
            name="email"
            placeholder="Email"
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

          <div className="password-input">
            <FormInput
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm Password"
            />
            <EyeIcon
              showPassword={showConfirmPassword}
              handleShowPassword={handleShowConfirmPassword}
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p className="haveAccount">
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </div>
      <div className="form-image">
        <img src={SignUpImg} alt="signup" />
      </div>
    </div>
  );
};

export default SignUp;

