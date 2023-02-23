import "./OverviewCard.css";
// import { BiGroup, GiMedicines, BsStack, FcExpired } from "react-icons/all";
import {BiGroup} from "react-icons/bi";
import {GiMedicines} from "react-icons/gi";
import {BsStack} from "react-icons/bs";
import {FcExpired} from "react-icons/fc";

const OverviewCard = ({ icon, title, value }) => {
  const getIcon = () => {
    switch (icon) {
      case "group":
        return <div style={{ backgroundColor: "#173C96" }} className="overview-card-icon"><BiGroup /></div>;
      case "medicines":
        return <div style={{ backgroundColor: "#5BDE3B" }} className="overview-card-icon"><GiMedicines /></div>;
      case "stack":
        return <div style={{ backgroundColor: "#E0218A" }} className="overview-card-icon"><BsStack/></div>;
      case "expired":
        return <div style={{ backgroundColor: "#F5DD5C" }} className="overview-card-icon"><FcExpired /></div>;
      default:
        return null;
    }
  };
  return (
    <>
    
      <div className="overview-card">
        <div className="overview-card-content">
          <div>{getIcon()}</div>
          <div className="overview-card-text">
            <p>{title}</p>
            <h2>{value}</h2>
          </div>
        </div>
        <p>Show Details</p>
      </div>
    </>
  );
};

export default OverviewCard;
