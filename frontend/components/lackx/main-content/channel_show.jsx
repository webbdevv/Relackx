import React from 'react'
import Message from './message'
import Chatbar from './chatbar'
import MainHeader from './main_header'
export default function ChannelShow(props) {
    return (
        <>
            <MainHeader description={props.channel ? props.channel.description : ""}>{props.channel ? props.channel.name : ""}</MainHeader>
            <div className="main-content-body">
                <ul className="message-container" id="message-feed">
                    <Message author="Kyle Xu">Message 1 thats really long so i can test out how stuff works when it goes past a single line. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Message>
                    <Message author="Kyle Xu">Message 2</Message>
                    <Message author="Kyle Xu">Message 3</Message>
                    <Message author="Kyle Xu">Message 4</Message>
                </ul>
            </div>
            <Chatbar/>
        </>
    )
}
