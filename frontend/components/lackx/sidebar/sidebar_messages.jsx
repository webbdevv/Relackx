import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
export default function SidebarMessages(){    
    const [dropMessagesOpen, setDropOpen] = useState(false)
    const [hover, setHover] = useState(false)

    function dropDown(){
        const caret = document.querySelector('.message-dropdown-header')
        if(dropMessagesOpen){
            caret.classList.add('sideways')
        } else {
            caret.classList.remove('sideways')
        }
        setDropOpen(!dropMessagesOpen);
    }

    function reveal(){
        const span = document.querySelector('.span-right-messages')
        span.classList.add('active')
    }

    function hide(){
        const span = document.querySelector('.span-right-messages')
        span.classList.remove('active')
    }
    return (
        <>
            <div className="sidebar-channels">
                <div className="message-dropdown-header" onMouseLeave={hide} onMouseEnter={reveal} onClick={dropDown}>Direct Messages<span className="span-right-messages">⋮<span className="space"></span>+</span></div>
                {dropMessagesOpen ? 
                <ul className="messages-dropdown">
                    <li className="dropdown-item">Raph</li>
                    <li className="dropdown-item">Chase Van Haselen</li>
                    <li className="dropdown-item">App Academy Channel Super long name that is bad</li>
                    <Link className="react-link" to='channel-browser'><li className="dropdown-item"><span id="add-channel-icon">+</span>Add Teammates</li></Link>
                </ul>
                : "" }
            </div>
        </>
    )    
}
