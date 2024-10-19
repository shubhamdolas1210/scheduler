import "./Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useState } from "react";

const Header = function () {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible((prev) => !prev);
  };

  return (
    <div>
      <div className="navbar-container">
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input className="search-input" placeholder="Search for artists..." />
        </div>
        <div className="navbar-right">
          <p>Pro</p>
          <p>Premium</p>
          <button className="nav-btn">
            <SaveAltIcon style={{ height: "15px", width: "15px" }} /> Get App
          </button>
          <img
            src="./assets/notification.png"
            alt="notification logo"
            style={{ height: "22px", width: "20px", cursor: "pointer" }}
            onClick={togglePopup}
          />
          <AccountCircleIcon
            style={{ height: "32px", width: "32px", color: "#312522" }}
          />
        </div>
      </div>
      <div className="backward-menu">
        <ArrowBackIcon
          style={{ height: "20px", width: "20px", color: "#d8d8d8" }}
        />
        <p>Back to Library</p>
      </div>
      {isPopupVisible && (
        <div className="notification-popup">
          <button>
            <TaskAltIcon style={{ color: "#00cc00", marginRight: "10px" }} />
            Events synced successfully
          </button>
        </div>
      )}
      <div className="tabs-section">
        <div className="custom-tab active">All</div>
        <div className="custom-tab">listening</div>
        <div className="custom-tab">learning</div>
        <div className="custom-tab">Rehearsal</div>
        <div className="custom-tab">Perform</div>
      </div>
      
    </div>
  );
};

export default Header;
