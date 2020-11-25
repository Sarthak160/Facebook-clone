import React from 'react'
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StroreFrontIcon from "@material-ui/icons/Storefront"
import {useStateValue} from "./StateProvider";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow.js"
function Sidebar() {
   const [{user},dispatch] = useStateValue();
   
    return (
        <div className = "sidebar">
            <SidebarRow 
            src={user.photoURL} 
            title  = {user.displayName}
            />
            <SidebarRow Icon ={LocalHospitalIcon} title = "Covid-19 infromation Center"/>
            <SidebarRow  Icon = {EmojiFlagIcon} title = "pages" />
            <SidebarRow Icon ={PeopleIcon} title = "Friends"/>
            <SidebarRow Icon ={ChatIcon} title = "Messenger"/>
            
            <SidebarRow Icon ={StroreFrontIcon} title = "Market Place" />
           
            <SidebarRow Icon = {VideoLibraryIcon} title = "Videos" />
            <SidebarRow Icon = {ExpandMoreIcon} title ="more.."/>
        </div>
    )
}

export default Sidebar
