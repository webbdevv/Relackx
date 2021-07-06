import React from 'react'
import MainHeader from './main_header'
import Chatbar from './chatbar'
import MessageContainer from './messages_feed'
export default function Main() {
    return (
        <div className="main">
            <MainHeader/>
            <MessageContainer/>
            <Chatbar/>
        </div>
    )
}
