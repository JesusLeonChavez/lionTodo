import React from 'react'
import "./topBar.css"
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="topLeft">
          <span className="logo">Lion ToDo</span>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsNone />
          </div>
          <div className="topBarIconContainer">
            <Language />
          </div>
          <div className="topBarIconContainer">
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
}
