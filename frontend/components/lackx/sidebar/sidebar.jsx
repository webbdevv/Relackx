import React, { Component } from 'react'
import SidebarButton from './sidebar_button'
import SidebarChannels from './sidebar_channels'
import SidebarMessages from './sidebar_messages'
export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-container">
                <SidebarButton/>
                <SidebarChannels/>
                <SidebarMessages/>
            </div>
        )
    }
}
