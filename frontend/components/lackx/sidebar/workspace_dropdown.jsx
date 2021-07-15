import React from 'react'
import { Link } from 'react-router-dom'
export default function WorkspaceDropdown(props) {
    if(!props.open) return null
    return (
        <div className="workspace-dropdown">
            <div className="d-header">
                <img src="https://a.slack-edge.com/80588/img/avatars-teams/ava_0025-88.png" alt="" />
                <span className='header'>{props.workspaceName}</span>
            </div>
            <div className="divider"></div>
                <div className="section">
                    <span onClick={props.logout} className="sign-out">Sign out of {props.workspaceName}</span>
                </div>
            
            <div className="divider"></div>
            <Link className="react-link" to="/workspaces">
                <div className="section">
                    <span className="switch">Switch workspaces</span>
                </div>
            </Link>
            <Link className="react-link" to={`/app/composer/`}>
                <div className="section">
                    <span>Add workspaces</span>
                </div>
            </Link>
        </div>
    )
}
