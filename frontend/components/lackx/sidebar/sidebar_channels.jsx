import React from 'react'
import { useState, useEffect } from 'react'
import { Link, NavLink} from 'react-router-dom'
import ContextMenuContainer from '../util/context_menu_container'
import CreateChannelModal from '../../modals/create_channel_modal'
import { createSocket, mouseX, mouseY } from '../../../util/misc_util'
//I HAVE NO CLUE WHY THE CONTAINER DOESN'T RESPOND TO STATE CHANGE

export default function SidebarChannels(props) {
    const [dropOpen, setDropOpen] = useState(false)
    const [channelModalOpen, setChannelModalOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [dm, setDM] = useState(false)
    const [sockets, setSockets] = useState(false)

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
            setMenuOpen(true)
            const menu = document.querySelector('.context-menu-sidebar')
            menu.style.top = mouseY(e) + 'px'
            menu.style.left = mouseX(e) + 'px'
            menu.classList.add('active')
            menu.setAttribute('channelref', e.currentTarget.getAttribute('href'))
            menu.setAttribute('channelid', e.target.dataset.channelid)
            menu.setAttribute('channelname', e.target.textContent)
            document.addEventListener("click", () => {
                menu.classList.remove('active')
                setMenuOpen(false)
            })
        }
    }

    if(!sockets){
        props.subscribedChannels.forEach(channel => {
        App.cable.subscriptions.create({
                channel: 'ChatChannel',
                channel_id: channel.id
            }, {
                received: (message) => {
                    if(message.destroyed){
                        props.removeMessage(message.id)
                        
                    }
                    else if(message.body && message.author_id && message.channel_id){ //is_a message 
                        props.receiveMessage(message)
                    }
                }
            })
        })
        setSockets(true)
    }

    const sidebarChannels = props.subscribedChannels.map(ch =>
        (
        <NavLink exact activeClassName="react-link-selected" key={ch.name} onContextMenu={handleClick} className="react-link link-hover" to={`/app/${props.workspaceId}/${ch.id}`}>
            <li className="dropdown-item" data-channelid={ch.id}>
                <span className="channel-identifier">#</span>{ch.name}
            </li>
        </NavLink>)
    )
    return (
        <>
            <div className="sidebar-channels">
                <div className="channel-dropdown-header sideways" onMouseLeave={hide} onMouseEnter={reveal} onClick={dropDown}>
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
                    <Link className="react-link link-hover" to={`/app/${props.workspaceId}/channel-browser`}><li className="dropdown-item"><span id="add-channel-icon">+</span>Add Channels</li></Link>
                </ul>
                : "" }
            </div>
            <ContextMenuContainer dm={dm} onClose={() => setMenuOpen(false)} open={menuOpen} channels={props.channels} currentUser={props.currentUser} deleteSubscription={props.deleteSubscription}/>
            <CreateChannelModal receiveMessage={props.receiveMessage} removeMessage={props.removeMessage} sockets={props.sockets}
             createSubscription={props.createSubscription} open={channelModalOpen} onClose={() => setChannelModalOpen(false)} currentUser={props.currentUser} workspaceId={props.workspaceId} channels={props.channels.map(ch => ch.name)} createChannel={props.createChannel}/>
        </>
    )
}
