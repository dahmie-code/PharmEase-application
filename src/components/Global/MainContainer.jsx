import { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import Dashboard from "../Dashboard/Dashboard";
// import TitleBar from "./TitleBar";
// import Login from "../Start/Login";
import './NavBar.css';
// import ProductList from "../Product/ProductList";
import Product from "../Product/Product";
import Navbar from "./NavBar";
import SideBar from "./SideBar";




const MainContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [authenticated, setauthenticated] = useState(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authenticated");
  //   if (loggedInUser) {
  //   setauthenticated(loggedInUser);
  //  }
  // }, []);
    
  //  if (!authenticated) {
  //   return <Navigate replace to="/login" />;
  //  } else {}
  return (
  
    <div className="navbar-sidebar">
      <Navbar toggle={toggle} />
      <div className="wrapper">
      <SideBar isOpen={isOpen} />
      <div className={`content ${isOpen ? 'shifted' : ''}`}>      
      {/* <TitleBar />     */}
      {/* <Dashboard /> */}
      <Product />
      </div>
      </div>
    </div>
  
    
  );
};

export default MainContainer;

