import React from 'react'

import "./sideBar.css"
import {
  LineStyle,
  Timeline,
  PermIdentity,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Menu</h3>
          <ul className="sideBarList">
            <Link to="/">
              <li className="sideBarListItem active">
                <LineStyle className="sideBarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Task</h3>
          <ul className="sideBarList">
            <Link to="/todos" className="link">
              <li className="sideBarListItem">
                <PermIdentity className="sideBarIcon" />
                To do
              </li>
            </Link>
            <li className="sideBarListItem">
              <BarChart className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notifications</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <MailOutline className="sideBarIcon" />
              Mail
            </li>
            <li className="sideBarListItem">
              <DynamicFeed className="sideBarIcon" />
              Feedback
            </li>
            <li className="sideBarListItem">
              <ChatBubbleOutline className="sideBarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <WorkOutline className="sideBarIcon" />
              Manage
            </li>
            <li className="sideBarListItem">
              <Timeline className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <Report className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
