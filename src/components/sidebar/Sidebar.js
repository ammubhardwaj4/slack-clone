import React, { useState, useEffect } from "react";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import AppsIcon from "@material-ui/icons/Apps";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import DraftsIcon from "@material-ui/icons/Drafts";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AddIcon from "@material-ui/icons/Add";

import "./Sidebar.css";
import SidebarOption from "./sidebarOptions/SidebarOption";
import db from "../../firebase";
import { useStateValue } from "../../store/StateProvider";

const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    // Run this code ONCE when the sidebar component loading..
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Clever Programmer</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reaction" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Show more" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
      {/* Connect to DB and list all channels */}
      {/* mapping <SidebarOption... /> */}
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} key={channel.id} />
      ))}
    </div>
  );
};

export default Sidebar;
