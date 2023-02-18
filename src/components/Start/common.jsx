import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormInput = (props) => {
  const { type, id, name, placeholder, value, onChange } = props;
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

const EyeIcon = (props) => {
  const { showPassword, handleShowPassword } = props;
  return showPassword ? (
    <FaEyeSlash onClick={handleShowPassword} />
  ) : (
    <FaEye onClick={handleShowPassword} />
  );
};

export { FormInput, EyeIcon };
