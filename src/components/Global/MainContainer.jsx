import { useState } from "react";
import Navbar from "./NavBar";
import SideBar from "./SideBar";
import TitleBar from "./TitleBar";
import './NavBar.css';




const NavbarSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
  
    <div className="navbar-sidebar">
      <Navbar toggle={toggle} />
      <div className="wrapper">
      <SideBar isOpen={isOpen} />
      <div className={`content ${isOpen ? 'shifted' : ''}`}>      
        <TitleBar />    
        
      </div>
      </div>
    </div>
  
    
  );
};

export default NavbarSidebar;

