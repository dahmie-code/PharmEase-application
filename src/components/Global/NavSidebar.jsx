import { useState } from "react";
import Navbar from "./NavBar";
import SideBar from "./SideBar";

const NavbarSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-sidebar">
      <Navbar toggle={toggle} />
      <SideBar isOpen={isOpen} />
    </div>
  );
};

export default NavbarSidebar;

