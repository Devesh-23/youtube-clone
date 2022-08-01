import React from 'react';
import "./SidebarRow.css";


function SidebarRow({ Selected, Icon, title}) {
  return (
    <div className={`SidebarRow ${Selected && "selected"}`}>
        <Icon className={"SidebarRow_icon"} />
        <h1 className="SidebarRow_title" >{title}</h1>
    </div>
  )
}

export default SidebarRow
