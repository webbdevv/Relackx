import React, {useState} from 'react'
import Message from './message'
import Chatbar from './chatbar'
import MainHeader from './main_header'
import { sortMessages } from '../../../util/misc_util'

export default function ChannelShow(props) {
    let messages = sortMessages(props.messages)
    const messageComponents = messages.map((msg, idx) => (
        (<Message msg={msg} prevAuthorId = {messages[idx - 1] ? messages[idx - 1].author_id : null} key={msg.id} user={props.users[msg.author_id - 1]}>{msg.body}</Message>)
    ))

    return (
        <>
            <MainHeader description={props.channel ? props.channel.description : ""}>{props.channel ? props.channel.name : ""}</MainHeader>
            <div className="main-content-body">
                <ul className="message-container" id="message-feed">
                    {messageComponents}
                </ul>
            </div>
            <Chatbar/>
        </>
    )
}
