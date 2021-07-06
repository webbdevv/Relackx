import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ContextMenu from '../util/context_menu'
export default function SidebarChannels(props) {
    const [dropOpen, setDropOpen] = useState(false)
    const [hover, setHover] = useState(false)

    function mouseX(evt) {
        if (evt.pageX) {
            return evt.pageX;
        } else if (evt.clientX) {
            return evt.clientX + (document.documentElement.scrollLeft ?
            document.documentElement.scrollLeft :
            document.body.scrollLeft);
        } else {
            return null;
        }
        }

        function mouseY(evt) {
        if (evt.pageY) {
            return evt.pageY;
        } else if (evt.clientY) {
            return evt.clientY + (document.documentElement.scrollTop ?
            document.documentElement.scrollTop :
            document.body.scrollTop);
        } else {
            return null;
        }
    }
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
    function handleClick(e){
        e.preventDefault()
        if(e.type === 'contextmenu'){
            const menu = document.querySelector('.context-menu-sidebar')
            menu.style.top = mouseY(e) + 'px'
            menu.style.left = mouseX(e) + 'px'
            menu.classList.add('active')
            menu.setAttribute('channelid', e.target.dataset.channelid)
            document.addEventListener("click", () => {
                menu.classList.remove('active')
            })
        }
    }

    const sidebarChannels = props.subscribedChannels.map(ch =>
        (
        <Link key={ch.name} onContextMenu={handleClick} className="react-link" to={`${ch.id}`}>
            <li className="dropdown-item" data-channelid={ch.id}>
                <span className="channel-identifier">#</span>{ch.name}
            </li>
        </Link>)
    )
    return (
        <>
            <div className="sidebar-channels">
                <div className="channel-dropdown-header" onMouseLeave={hide} onMouseEnter={reveal} onClick={dropDown}>
                    <span className="sidebar-ch-name">Channels</span>
                    <span className="span-right">⋮<span className="space"></span>+</span>
                    </div>
                {dropOpen ? 
                <ul className="channel-dropdown">
                    {sidebarChannels}
                    <Link className="react-link" to='channel-browser'><li className="dropdown-item"><span id="add-channel-icon">+</span>Add Channels</li></Link>
                </ul>
                : "" }
            </div>
            <ContextMenu deleteSubscription={props.deleteSubscription} />
        </>
    )
}
