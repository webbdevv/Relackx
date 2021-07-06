import React from 'react'
import { Link } from 'react-router-dom'
export default function SidebarOption(props){
    return (
        <div className="sidebar-menu-container">
            <Link className="sidebar-menu-btn" to={`channel-browser`}>
                {props.icon}{props.children}
            </Link>
        </div>
    )
}
