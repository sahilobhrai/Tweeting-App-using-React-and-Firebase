import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button } from "@mui/material";
function Sidebar() {
    return (
        <div className="sidebar">
            {/* app logo */}
            <MilitaryTechIcon className="sidebar_logo"/>
            {/* sidebar options*/}
            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={ExploreIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsIcon} text="Notifications"/>
            <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
            <SidebarOption Icon={PersonIcon} text="My Profile"/>

            {/*Button -> Tweet */}
            <Button variant="outlined" className="sidebar_tweet" fullWidth>Add Post</Button>
        </div>
    )
}

export default Sidebar