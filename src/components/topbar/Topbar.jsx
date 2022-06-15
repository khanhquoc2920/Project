import React from 'react'
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">KhanhDz</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
            <NotificationsNoneIcon/>
            <span className="topIconBadge">30</span>
                </div>
                <div className="topbarIconContainer">
            <LanguageIcon/>
            <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
            <SettingsIcon/>
           
                </div>
            <img src="https://anhdep123.com/wp-content/uploads/2021/02/anh-meo-hai-huoc.jpg" alt="" className="topAvt" />  
            </div>
        </div>
      
    </div>
  )
}
