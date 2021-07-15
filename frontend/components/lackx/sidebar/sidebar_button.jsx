import React, { useState } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../../actions/session_actions'
import WorkspaceDropdown from './workspace_dropdown'
export function SidebarButton(props) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="react-link" onClick={() => setOpen(!open)}>
                <div className="sidebar-btn">
                    {props.content}
                </div>
            </div>
            {props.composition ? null : <WorkspaceDropdown currentUser={props.currentUser} workspaceId={props.workspaceId} logout={props.logout} workspaceName={props.content} open={open} onClose={() => setOpen(false)} />}
        </>
    )
}

const mSTP = state => ({
    currentUser: state.session.id,
    workspaceId: state.session.workspace.id
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(SidebarButton)