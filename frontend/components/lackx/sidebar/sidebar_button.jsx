import React from 'react'
import { Link } from 'react-router-dom'
export default function SidebarButton(props) {
    return (
        <Link className="react-link" to={`/app/${props.workspaceId}/1`}>
            <div className="sidebar-btn">
                {props.content}
            </div>
        </Link>
    )
}
