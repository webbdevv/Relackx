import React from 'react'
import MainHeader from './main_header'

export default function ChannelBrowser(props) {
    return (
        <>
        <MainHeader>Channel Browser</MainHeader>
            <div className="main-content-body">
                <div className="container">
                    <div className="channel-number">{props.channels.length} channels</div>
                </div>
            </div>
        </>
    )
}
