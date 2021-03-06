import React from 'react';
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from "@material-ui/core";

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar_twitterIcon"/>
            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={ExploreIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notification"/>
            <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListAltIcon} text="Lists"/>
            <SidebarOption Icon={PersonOutlineIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizIcon} text="More"/>

            {/* Button -> tweet */}
            <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>
        
        </div>

    )
}

export default Sidebar
