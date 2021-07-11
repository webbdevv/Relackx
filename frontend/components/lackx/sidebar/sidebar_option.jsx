import React from 'react'
import { NavLink } from 'react-router-dom'
export default function SidebarOption(props){
    return (
        <div className="sidebar-menu-container">
            <NavLink exact activeClassName="react-link-selected" className="sidebar-menu-btn react-link link-hover" to={props.link}>
                {props.icon}{props.children}
            </NavLink>
        </div>
    )
}
