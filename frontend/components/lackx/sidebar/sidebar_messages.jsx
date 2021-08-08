import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { mouseX, mouseY } from '../../../util/misc_util'
import { selectUser } from '../../../reducers/selectors'
import ContextMenuContainer from '../util/context_menu_container'
export default function SidebarMessages(props){    
    const [dropMessagesOpen, setDropOpen] = useState(false)
    const [menu, setMenuOpen] = useState(false)
    const [dm, setDm] = useState(true)
    const [sockets, setSockets] = useState(false)

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
        props.channels.forEach(channel => {
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

    const sidebarDMs = props.channels.map(ch => {
            let user = selectUser(props.subscriptions, props.users, ch, props.currentUser)
    
            return (<NavLink exact activeClassName="react-link-selected" key={ch.name} onContextMenu={handleClick} className="react-link link-hover" to={`/app/${props.workspaceId}/dms/${ch.id}`}>
                <li className="dropdown-item" data-channelid={ch.id}>
                    <span className="channel-identifier"></span>{user ? user.first_name + " " + user.last_name : ""}
                </li>
            </NavLink>)
        }
    )
    return (
        <>
            <div className="sidebar-channels">
                <Link className="react-link link-hover" to={`/app/${props.workspaceId}/all-dms`}><div className="message-dropdown-header sideways" onMouseLeave={hide} onMouseEnter={reveal} onClick={dropDown}>Direct Messages<span className="span-right-messages">⋮<span className="space"></span>+</span></div></Link>
                {dropMessagesOpen ? 
                <ul className="messages-dropdown">
                    {sidebarDMs}
                    <Link className="react-link link-hover" to={`/app/${props.workspaceId}/all-dms`}><li className="dropdown-item"><span id="add-channel-icon">+</span>Add Teammates</li></Link>
                </ul>
                : "" }
            </div>
            <ContextMenuContainer dm={dm} open={menu} channels={props.channels} currentUser={props.currentUser} deleteSubscription={props.deleteSubscription}/>
        </>
    )    
}
