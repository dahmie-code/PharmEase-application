import "./Sidebar.css";
import { FaThList, FaIdCard } from "react-icons/fa";
import {HiUserGroup, HiShoppingCart} from "react-icons/hi";
import {BiGroup} from "react-icons/bi";
import {GiMedicines} from "react-icons/gi";
import {BsStack, BsGearFill} from "react-icons/bs";
import {MdOutlineInventory} from "react-icons/md";
import {IoPersonCircleSharp} from "react-icons/io5";





const SideBar = ({isOpen}) => {

    return (
    <>
      
      <aside className= {isOpen ? "sidebar__open" : "sidebar__closed"}>
        
        <ul className="sidebar__menu">
        <div className="sidebar__avatar">
        {isOpen && <span className="sidebar__text" style={{color: "#333", textAlign:"center", marginBlockEnd:"48px"}}><IoPersonCircleSharp className= "avatar" />Admin</span>} 
        {/* <p style={{color: "#333", textAlign:"center", marginBlockEnd:"48px"}}>Admin</p> */}
        </div>
        
          <li className="sidebar-menu-item">
            <p style={{color: "#173C96"}}>{isOpen && <span className="sidebar__text">Navigation</span>}</p>
            <a href="#" className="sidebar-menu-link">
              <FaThList style={{marginRight:"12px", fontSize:"17px"}}/>{isOpen && <span className="sidebar__text">Dashboard</span>}
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="#" className="sidebar-menu-link">
             <HiUserGroup style={{marginRight:"12px", fontSize:"17px"}}/> {isOpen && <span className="sidebar__text">Dashboard</span>}
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="#" className="sidebar-menu-link">
              <BiGroup style={{marginRight:"12px", fontSize:"17px"}}/> {isOpen && <span className="sidebar__text">Dashboard</span>}
            </a>
          </li>          
          <li className="sidebar-menu-item">
            <a href="#" className="sidebar-menu-link">
              <GiMedicines style={{marginRight:"12px", fontSize:"17px"}}/> {isOpen && <span className="sidebar__text">Dashboard</span>}
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="#" className="sidebar-menu-link">
              <BsStack style={{marginRight:"12px", fontSize:"17px"}}/>{isOpen && <span className="sidebar__text">Dashboard</span>}
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="#" className="sidebar-menu-link">
              <HiShoppingCart style={{marginRight:"12px", fontSize:"17px"}}/>{isOpen && <span className="sidebar__text">Dashboard</span>}
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="#" className="sidebar-menu-link">
              <FaIdCard style={{marginRight:"12px", fontSize:"17px"}}/>{isOpen && <span className="sidebar__text">Dashboard</span>}
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="#" className="sidebar-menu-link">
              <MdOutlineInventory style={{marginRight:"12px", fontSize:"17px"}}/>{isOpen && <span className="sidebar__text">Dashboard</span>}
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="#" className="sidebar-menu-link">
              <BsGearFill style={{marginRight:"12px", fontSize:"17px"}}/>{isOpen && <span className="sidebar__text">Dashboard</span>}
            </a>
          </li>
        </ul>
      </aside>
      
    </>
  );
};

export default SideBar;