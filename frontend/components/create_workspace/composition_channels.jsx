import React, {useState} from 'react'

export default function CompositionChannels(props) {
    return (
        <>
            <div className="sidebar-channels">
                <div className="channel-dropdown-header">
                </div>
                <ul className="channel-dropdown composer">
                    <li className="dropdown-item">
                        {"Channels"}
                    </li>
                    <li className="dropdown-item"><span id="add-channel-icon">+</span>Add Channels</li>
                </ul>
            </div>

            <div className="sidebar-channels">
                <div className="message-dropdown-header">Direct Messages</div>
                <ul className="messages-dropdown composer">
                    <div className="react-link link-hover">
                        <li className="dropdown-item">
                            <span id="add-channel-icon">+</span>Add Teammates
                        </li>
                    </div>
                </ul>
            </div>
        </>
    )
}
