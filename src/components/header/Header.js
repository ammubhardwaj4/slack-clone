import React from "react";
import "./Header.css";

import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "../../store/StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatars for loged in user */}
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />

        {/* Time icon */}
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        {/* Search Bar */}
        <SearchIcon />
        {/* input */}
        <input type="text" placeholder="Search Google" />
      </div>
      <div className="header__right">
        {/* help icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
