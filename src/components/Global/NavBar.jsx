import  { useState } from 'react';
import './NavBar.css'
import { FaBars, FaBell, FaUser, FaAngleDown, FaSignOutAlt, FaUserEdit } from 'react-icons/fa';
import {IoPersonCircleSharp} from 'react-icons/io5';





const Navbar = ({toggle}) => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (

    <nav className="navbar__wrapper">
        
    <div className="navbar__container">
        <div className="navbar__left">
          {/* <RiDashboardLine className="navbar__icon" /> */}
          <h1 className="navbar__title">PharmEase</h1>
        </div>
        <div className="navbar__right">
          <FaBars className="navbar__menu" onClick={toggle} />
        </div>
      </div>
  
      <div className="navbar-right">
        <div className="navbar__notification">
          <FaBell />
        </div>
        <div className="divider"></div>
        <div className="navbar__avatar" onClick={toggleDropdown}>
          <IoPersonCircleSharp /> <p>John Doe<span>Admin</span></p>
          <FaAngleDown className="navbar-dropdown-icon" />
        </div>
        {dropdownOpen && (
          <div className="navbar__dropdown">
            <div className="navbar-dropdown-header">
              <div className="navbar__dropdown-avatar">
              <IoPersonCircleSharp /> 
              </div>
              <div className="navbar-dropdown-user">
                <h3 className="navbar-dropdown-name">Admin User</h3>
                <p className="navbar-dropdown-email">admin@example.com</p>
              </div>
            </div>
            <ul className="navbar-dropdown-menu">
              <li className="navbar-dropdown-item">
                <FaUser className="navbar__dropdown-icon" />
                <a href="#" className="navbar-dropdown-link">                
                  My Profile
                </a>
              </li>
              <li className="navbar-dropdown-item">
                <FaUserEdit className="navbar__dropdown-icon" />
                <a href="#" className="navbar-dropdown-link">
                  Edit Profile
                </a>
              </li>
              <li className="navbar-dropdown-item">
                <FaSignOutAlt className="navbar__dropdown-icon" />
                <a href="#" className="navbar-dropdown-link">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
     
    </nav>
    

  );
};

export default Navbar;