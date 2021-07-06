import React from 'react'

export default function ContextMenu(props) {
    function leaveChannel(e){
        debugger
        const id = document.querySelector('.context-menu-sidebar').getAttribute('channelid')
        props.deleteSubscription(id)
    }

    return (
        <div style={props.style} className="context-menu-sidebar">
            <ul className="menu-dropdown">
                <li className="menu-option"><span>See channel details</span></li>
                <li onClick={leaveChannel} className="menu-option leave-channel"><span>Leave Channel</span></li>
            </ul>
        </div>
    )
}
