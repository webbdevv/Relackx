import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
export default function SidebarChannelItem(props){
    const [sockets, setSockets] = useState(null)
    useEffect(() => {
        if(!sockets){
            setSockets(props.sockets.cable.subscriptions.create({
                channel: 'ChatChannel',
                channel_id: props.channel.id
            }, {
                received: (message) => {
                    if(message.destroyed){
                        props.removeMessage(message.id)
                        
                    }
                    else if(message.body && message.author_id && message.channel_id){ //is_a message 
                        props.receiveMessage(message)
                    }
                }
            }))
        }
    })

    const channel = props.channel
    return (
        <NavLink exact activeClassName="react-link-selected" key={channel.name} onContextMenu={props.handleClick} className="react-link link-hover" to={`/app/${props.workspaceId}/${channel.id}`}>
            <li className="dropdown-item" data-channelid={channel.id}>
                <span className="channel-identifier">#</span>{channel.name}
            </li>
        </NavLink>
    )
}
