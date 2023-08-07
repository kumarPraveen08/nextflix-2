import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        {/* left nav */}
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="netflix logo"
            onClick={() => navigate("/")}
          />
          <Link to={`/`}>Homepage</Link>
          <Link to={`/movies`}>Movies</Link>
          <Link to={`/series`}>Series</Link>
        </div>

        {/* right nav */}
        <div className="right">
          <SearchIcon onClick={() => setShowSearch(!showSearch)} />
          <span>KIDS</span>
          <NotificationsIcon />
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          {/* profile options */}
          <div className="profile">
            <ArrowDropDownIcon />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
      {/* {showSearch && <Search />} */}
    </div>
  );
}
