import React from 'react'
import './Styles/mobileNavigationMenu.css'
const MobileNavigationMenu = () => {
    return (
        <>
        {/* <!-- *************************Mobile menu  STARTS HERE*************************** --> */}
    
    <div className="mobileMenusConrainerGradient"></div>
    <div className="mobileMenusContainer">
    <a href="https://madhavendra.tech/"><div className="mobileMenus" id="home"></div></a>
        <a href="https://madhavendra.tech/mini-projects"><div className="mobileMenus" id="miniProjects"></div></a>
        <a href="/"><div className="mobileMenus" id="randomThoughts"></div></a>
    </div>
        </>  )
}

export default MobileNavigationMenu