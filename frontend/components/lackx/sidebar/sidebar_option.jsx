import React from 'react'
import { Link } from 'react-router-dom'
export default function SidebarOption(props){
    return (
        <div className="sidebar-menu-container">
            {props.icon}
            <Link className="sidebar-menu-btn" to={`app/${props.workspaceId}/channel-browser`}>
                {props.children}
            </Link>
        </div>
    )
}
