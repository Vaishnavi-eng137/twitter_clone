import React from 'react';
import "./SidebarOption.css";


function SidebarOption({ active,text,Icon }) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
           {/* if u r active then go ahead and add the following,we r writing everything in bem */}
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption
