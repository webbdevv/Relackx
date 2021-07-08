import React, { useState, Component } from 'react'
import MainHeader from './main_header'
import { Link } from 'react-router-dom'
import { deleteChannel } from '../../../util/channel_util'
import { deleteSubscription } from '../../../util/subscriptions_util'
export default function ChannelBrowser(props){
    const [search, setSearch] = useState('')
    // const subscribedChannelIds = props.subscriptions.map(s => s.subscribable_id)
    // const subscribedChannels = props.channels.filter(ch => subscribedChannelIds.includes(ch.subscribable_id))
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
    function joined(channelId){
        return props.subscribedChannelIds.includes(channelId)
    }

    function owner(userId){
        return props.session.id === workspace.owner_id
    }

    const channels = props.channels.map((channel, idx) => {
        const button = (!joined(channel.id) ? <button onClick={() => joinChannel(channel.id)} className="join-btn">
                <Link className="react-link" to={String(channel.id)}>Join</Link>
            </button>
            :
            <button className="join-btn leave" onClick={() => deleteSubscription(channel.id)}>
                <Link className="react-link" to={`/app/${props.session.workspaceId}/1`}>Leave</Link>
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
            <MainHeader description="">Channel Browser</MainHeader>
            <div className="main-content-body browser">
                <div className="browser-container">
                    <svg className="channel-search" xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><switch><g><path d="M90.829 85.172L68.128 62.471A35.846 35.846 0 0 0 76 40C76 20.118 59.883 4 40 4 20.118 4 4 20.118 4 40s16.118 36 36 36c8.5 0 16.312-2.946 22.471-7.873l22.701 22.701A3.988 3.988 0 0 0 88 92a4 4 0 0 0 2.829-6.828zM40 68c-15.464 0-28-12.536-28-28s12.536-28 28-28c15.465 0 28 12.536 28 28S55.465 68 40 68z"/></g></switch></svg>
                    <input type="text" className="search-bar" placeholder="Search for a channel by name"/>
                    <div className="channel-nav">
                        <span>{props.channels.length} channels</span>
                        <span className='float-right'>Sort</span>
                    </div>
                    <ul className="channels">
                        {
                            channels
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
