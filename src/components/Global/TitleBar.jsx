import { FaThList, FaIdCard } from "react-icons/fa";
import { HiUserGroup, HiShoppingCart } from "react-icons/hi";
import { BiGroup } from "react-icons/bi";
import { GiMedicines } from "react-icons/gi";
import { BsStack, BsGearFill } from "react-icons/bs";
import { MdOutlineInventory } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import "./Sidebar.css";


const TitleBar = ({ icon, title }) => {
  let iconElement = null;

  // Mapping the icon prop to the corresponding icon element
  switch (icon) {
    case "FaThList":
      iconElement = <FaThList />;
      break;
    case "FaIdCard":
      iconElement = <FaIdCard />;
      break;
    case "HiUserGroup":
      iconElement = <HiUserGroup />;
      break;
    case "HiShoppingCart":
      iconElement = <HiShoppingCart />;
      break;
    case "BiGroup":
      iconElement = <BiGroup />;
      break;
    case "GiMedicines":
      iconElement = <GiMedicines />;
      break;
    case "BsStack":
      iconElement = <BsStack />;
      break;
    case "BsGearFill":
      iconElement = <BsGearFill />;
      break;
    case "MdOutlineInventory":
      iconElement = <MdOutlineInventory />;
      break;
    case "IoPersonCircleSharp":
      iconElement = <IoPersonCircleSharp />;
      break;
    default:
      iconElement = null;
      break;
  }

  return (
    <div className="titlebar__container">
      {/* Only render the icon if it's provided */}
      {iconElement && (
        <div
          style={{ fontSize: "17px", color: "#444", marginInlineEnd: "12px" }}
        >
          {iconElement}
        </div>
      )}
      <h6 style={{ fontSize: "20px", color: "#444", fontWeight: "500" }}>
        {title}
      </h6>
    </div>
  );
};

export default TitleBar;
