import React, { useState, useEffect } from 'react'
import MainHeader from './main_header'
import { Link } from 'react-router-dom'
import { deleteSubscription } from '../../../util/subscriptions_util'
import CreateChannelModalContainer from '../../modals/create_channel_modal_container'
import { searchChannel } from '../../../util/misc_util'
export default function ChannelBrowser(props){
    const [search, setSearch] = useState('')
    const [isOpen, setOpen] = useState(false)

    function showBtn(id){
        const btns = document.querySelectorAll('.join-btn')
        btns[id].classList.add('active')
    }
    function hideBtn(id){
        const btns = document.querySelectorAll('.join-btn')
        btns[id].classList.remove('active')
    }
    function joinChannel(subscribable_id, subscribable_type = "Channel"){
        props.createSubscription({
            subscriber_id: props.session.id,
            subscribable_id,
            subscribable_type,
            workspace_id: props.session.workspaceId
        })
    }
    
    function deleteSubscription(id){
        let subscription = props.subscriptions.find(s => s.subscribable_id === id && s.subscribable_type === "Channel" && s.subscriber_id === props.currentUser)
        props.deleteSubscription(subscription.id)
    }

    function joined(channelId){
        return props.subscribedChannelIds.includes(channelId)
    }

    const channelItems = props.channels.filter(ch => ch.dm_flag === false && ch.name.toLowerCase().includes(search)).map((channel, idx) => {
        const button = (!joined(channel.id) ? <button onClick={() => joinChannel(channel.id)} className="join-btn">
                Join
            </button>
            :
            <button className="join-btn leave" onClick={() => deleteSubscription(channel.id, "Channel")}>
                Leave
            </button>)

        const description = (!joined(channel.id) ? 
        <p className="channel-description">{channel.userIds ? channel.userIds.length : "0"} members <span className="channel-listing-description">{channel.description ? (channel.description.length > 100 ? "   •   " + channel.description.slice(0, 100) + "..." : "   •   " + channel.description) : ""}</span></p>
        :
        <p className="channel-description joined">Joined ✓<span className="channel-listing-description">   •   {channel.userIds ? channel.userIds.length : "0"} members {channel.description ? (channel.description.length > 100 ? "   •   " + channel.description.slice(0, 100) + "..." : "   •   " + channel.description) : ""}</span></p>)

         return (<li onMouseLeave={() => hideBtn(idx)} onMouseEnter={() => showBtn(idx)} key={channel.id} className="channel-listing">
            <p className="channel-name">{channel.name}</p> <div id="break"></div>
            {description}
            {button}
        </li>)
    })

    return (
        <>
            <MainHeader description="  " type="browser">Channel Browser</MainHeader>
            <div className="main-content-body browser">
                <div className="browser-container">
                    <svg className="channel-search" xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><switch><g><path d="M90.829 85.172L68.128 62.471A35.846 35.846 0 0 0 76 40C76 20.118 59.883 4 40 4 20.118 4 4 20.118 4 40s16.118 36 36 36c8.5 0 16.312-2.946 22.471-7.873l22.701 22.701A3.988 3.988 0 0 0 88 92a4 4 0 0 0 2.829-6.828zM40 68c-15.464 0-28-12.536-28-28s12.536-28 28-28c15.465 0 28 12.536 28 28S55.465 68 40 68z"/></g></switch></svg>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className="search-bar" placeholder="Search for a channel by name"/>
                     <div className="flex-center">
                        <button onClick={() => setOpen(true)} className="create-channel">Create Channel</button>
                    </div>
                    <div className="channel-nav">
                        <span>{props.channels.length} channels</span>
                        <span className='float-right'>Sort</span>
                    </div>
                    <ul className="channels">
                        {
                            channelItems
                        }
                    </ul>
                </div>
            </div>
            <CreateChannelModalContainer channels={props.channels.map(ch => ch.name)} workspaceId={props.session.workspaceId} currentUser={props.session.id} createChannel={props.createChannel} open={isOpen} onClose={() => setOpen(false)} />
        </>
    )
}
