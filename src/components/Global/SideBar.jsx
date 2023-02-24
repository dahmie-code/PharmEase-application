import "./Sidebar.css";
import { NavLink} from "react-router-dom";
import {links} from "./links"
import {IoPersonCircleSharp} from "react-icons/io5";

const SideBar = ({isOpen}) => {

    return (
    <>
      
      <aside className= {isOpen ? "sidebar__open" : "sidebar__closed"}>
        
        <div className="sidebar__menu">
          <>
        <div className="sidebar__avatar">
        {isOpen && (<span className="sidebar__text" style={{color: "#333", textAlign:"center"}}><IoPersonCircleSharp className= "avatar" />Admin</span>
        
        )}</div>
        
        {
          links.map((item)=>(
            <div key={item.links.icon} className="sidebar-menu-item">
              {isOpen && (<p >
                  {item.title}
                </p>)}
              {
                item.links.map((link)=>(
                  <NavLink 
                  to={`/${link.name}`}
                  key={link.name}
                  className="sidebar-menu-link"
                  activeClassName="sidebar__link--active"
                  >
                    <>
                    <div style={{marginRight:"12px", fontSize:"17px"}}>{link.icon}</div>
                    {isOpen && <span className="sidebar__text">{link.name}</span>
                    }
                    </>
                  </NavLink>
                ))
              }
            </div>
          ))
        }
          {/* <li className="sidebar-menu-item">
            <p style={{color: "#173C96"}}>{isOpen && <span className="sidebar__text" style={{marginBlockEnd: "32px"}}>Navigation</span>}</p>
            <a href="#" className="sidebar-menu-link">
              <FaThList style={{marginRight:"12px", fontSize:"17px"}}/>{isOpen && <span className="sidebar__text">Dashboard</span>}
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="#" className="sidebar-menu-link">
             <HiUserGroup style={{marginRight:"12px", fontSize:"17px"}}/> {isOpen && <span className="sidebar__text">Customers</span>}
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="#" className="sidebar-menu-link">
              <BiGroup style={{marginRight:"12px", fontSize:"17px"}}/> {isOpen && <span className="sidebar__text">Suppliers</span>}
            </a>
          </li>          
          <li className="sidebar-menu-item">
            <a href="#" className="sidebar-menu-link">
              <GiMedicines style={{marginRight:"12px", fontSize:"17px"}}/> {isOpen && <span className="sidebar__text">Products</span>}
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="#" className="sidebar-menu-link">
              <BsStack style={{marginRight:"12px", fontSize:"17px"}}/>{isOpen && <span className="sidebar__text">Stock</span>}
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="#" className="sidebar-menu-link">
              <HiShoppingCart style={{marginRight:"12px", fontSize:"17px"}}/>{isOpen && <span className="sidebar__text">Orders</span>}
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="#" className="sidebar-menu-link">
              <FaIdCard style={{marginRight:"12px", fontSize:"17px"}}/>{isOpen && <span className="sidebar__text">Employee</span>}
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="#" className="sidebar-menu-link">
              <MdOutlineInventory style={{marginRight:"12px", fontSize:"17px"}}/>{isOpen && <span className="sidebar__text">Inventory</span>}
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a href="#" className="sidebar-menu-link">
              <BsGearFill style={{marginRight:"12px", fontSize:"17px"}}/>{isOpen && <span className="sidebar__text">Settings</span>}
            </a>
          </li> */}
        </> 
    </div>
      </aside>
      
    </>
  );
};

export default SideBar;

