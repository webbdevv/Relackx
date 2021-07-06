import React from 'react'
import { Link } from 'react-router-dom'
export default function SidebarButton(props) {
    return (
        <Link className="react-link" to={`/app/${props.session.workspaceId}/1`}>
            <div className="sidebar-btn">
                App Academy
            </div>
        </Link>
    )
}
