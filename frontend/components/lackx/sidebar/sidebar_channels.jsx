import React from 'react'
import { useState } from 'react'

export default function SidebarChannels() {
    const [dropOpen, setDropOpen] = useState(true)
    const [hover, setHover] = useState(false)

    function dropDown(){
        const caret = document.querySelector('.channel-dropdown-header')
        if(dropOpen){
            caret.classList.add('sideways')
        } else {
            caret.classList.remove('sideways')
        }
        setDropOpen(!dropOpen);
    }

    function reveal(){
        const span = document.querySelector('.span-right')
        span.classList.add('active')
    }

    function hide(){
        const span = document.querySelector('.span-right')
        span.classList.remove('active')
    }

    return (
        <>
            <div className="sidebar-channels">
                <div className="channel-dropdown-header" onMouseLeave={hide} onMouseEnter={reveal} onClick={dropDown}>Channels<span className="span-right">⋮<span className="space"></span>+</span></div>
                {dropOpen ? 
                <ul className="channel-dropdown">
                    <li className="dropdown-item"><span className="channel-identifier">#</span>Test1</li>
                    <li className="dropdown-item"><span className="channel-identifier">#</span>App Academy Channel</li>
                    <li className="dropdown-item"><span className="channel-identifier">#</span>App Academy Channel Super long name that is bad</li>
                </ul>
                : "" }
            </div>
        </>
    )
}
