import React, { Component } from 'react'
import SidebarButton from './sidebar_button'
import SidebarChannels from './sidebar_channels'
import SidebarMessages from './sidebar_messages'
import SidebarOption from './sidebar_option'

export default class Sidebar extends Component {
    render() {
        let search = <svg className="sidebar-menu-icon" xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><switch><g><path fill="#d3d3d3" d="M90.829 85.172L68.128 62.471A35.846 35.846 0 0 0 76 40C76 20.118 59.883 4 40 4 20.118 4 4 20.118 4 40s16.118 36 36 36c8.5 0 16.312-2.946 22.471-7.873l22.701 22.701A3.988 3.988 0 0 0 88 92a4 4 0 0 0 2.829-6.828zM40 68c-15.464 0-28-12.536-28-28s12.536-28 28-28c15.465 0 28 12.536 28 28S55.465 68 40 68z"/></g></switch></svg>
        return (
            <div className="sidebar-container">
                <SidebarButton session={this.props.session}/>
                <SidebarOption workspaceId={this.props.workspaceId} icon={search}>Channel Browser</SidebarOption>
                <SidebarChannels/>
                <SidebarMessages/>
            </div>
        )
    }
}
