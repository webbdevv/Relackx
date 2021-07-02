import React from 'react'
import MainHeader from './main_header'
import Chatbar from './chatbar'
import Body from './body'
export default function Main() {
    return (
        <div className="main">
            <MainHeader/>
            <Body/>
            <Chatbar/>
        </div>
    )
}
