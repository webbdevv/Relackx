import React from 'react'
import { useState } from 'react'
import { Link, NavLink} from 'react-router-dom'
import ContextMenu from '../util/context_menu'
import CreateChannelModal from '../../modals/create_channel_modal'
export default function SidebarChannels(props) {
    const [dropOpen, setDropOpen] = useState(false)
    const [channelModalOpen, setChannelModalOpen] = useState(false)
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
            menu.setAttribute('channelref', e.currentTarget.getAttribute('href'))
            menu.setAttribute('channelid', e.target.dataset.channelid)
            menu.setAttribute('channelname', e.target.textContent)
            document.addEventListener("click", () => {
                menu.classList.remove('active')
            })
        }
    }

    const sidebarChannels = props.subscribedChannels.map(ch =>
        (
        <NavLink exact activeClassName="react-link-selected" key={ch.name} onContextMenu={handleClick} className="react-link link-hover" to={`${ch.id}`}>
            <li className="dropdown-item" data-channelid={ch.id}>
                <span className="channel-identifier">#</span>{ch.name}
            </li>
        </NavLink>)
    )
    return (
        <>
            <div className="sidebar-channels">
                <div className="channel-dropdown-header" onMouseLeave={hide} onMouseEnter={reveal} onClick={dropDown}>
                    <span className="sidebar-ch-name">Channels</span>
                    <span className="span-right">
                        <span>⋮</span>
                        <span className="space"></span>
                        <span onClick={() => setChannelModalOpen(true)}>+</span>
                        </span>
                    </div>
                {dropOpen ? 
                <ul className="channel-dropdown">
                    {sidebarChannels}
                    <Link className="react-link link-hover" to='channel-browser'><li className="dropdown-item"><span id="add-channel-icon">+</span>Add Channels</li></Link>
                </ul>
                : "" }
            </div>
            <ContextMenu deleteSubscription={props.deleteSubscription}/>
            <CreateChannelModal currentUser={props.currentUser} workspaceId={props.workspaceId} channels={props.channels.map(ch => ch.name)} createChannel={props.createChannel} open={channelModalOpen} onClose={() => setChannelModalOpen(false)}/>
        </>
    )
}
