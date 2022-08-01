import React, {useState} from "react";
import "./header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";


function Header() {
  const[ inputSearch, setInputSearch] = useState('')


  return (
    <div className="header my-3">
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
        </Link>
      </div>

      <div className="header_input">
        <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder=" Search" type="text" />
        <Link to={`/Search/${inputSearch}`}>
      <SearchIcon className="header_inputbutton" />
      </Link>
        
      </div>
      
   
      

      <div className="header_right">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationIcon className="header_icon" />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
