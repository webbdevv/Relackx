import React, { Component } from 'react'
import SidebarButton from './sidebar_button'
import SidebarChannels from './sidebar_channels'
import SidebarMessagesContainer from './sidebar_messages_container'
import SidebarOption from './sidebar_option'

export default class Sidebar extends Component {
    render() {
        let search = <svg className="sidebar-menu-icon" xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><switch><g><path fill="#d3d3d3" d="M90.829 85.172L68.128 62.471A35.846 35.846 0 0 0 76 40C76 20.118 59.883 4 40 4 20.118 4 4 20.118 4 40s16.118 36 36 36c8.5 0 16.312-2.946 22.471-7.873l22.701 22.701A3.988 3.988 0 0 0 88 92a4 4 0 0 0 2.829-6.828zM40 68c-15.464 0-28-12.536-28-28s12.536-28 28-28c15.465 0 28 12.536 28 28S55.465 68 40 68z"/></g></switch></svg>
        let messages = <svg className="sidebar-menu-icon" width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.15672 1.08334C4.67913 1.08334 1.04169 4.36435 1.04169 8.42105C1.07475 9.5912 1.37651 10.7332 1.91894 11.7411C2.46137 12.749 3.22691 13.5901 4.1445 14.1864L2.95111 16.807L5.72931 15.0669C6.82345 15.5265 7.98527 15.761 9.15672 15.7588C13.6343 15.7588 17.2718 12.4778 17.2718 8.42105C17.2718 4.36435 13.6343 1.08334 9.15672 1.08334Z" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.5175 5.4231C20.2122 6.10445 23 9.07099 23 12.6141C22.9669 13.7842 22.6652 14.9262 22.1227 15.9341C21.5803 16.942 20.8148 17.7831 19.8972 18.3794L21.0906 21L18.3124 19.2599C17.2182 19.7195 16.0564 19.954 14.885 19.9518C13.4073 20.0128 11.9415 19.641 10.6379 18.8747C9.33432 18.1084 8.23987 16.9751 7.46686 15.5911" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        return (
            <div className="sidebar-container">
                <SidebarButton workspaceId={this.props.workspaceId}/>
                <SidebarOption link={`/app/${this.props.workspaceId}/channel-browser`} workspaceId={this.props.workspaceId} icon={search}>Channel Browser</SidebarOption>
                <SidebarOption link={`/app/${this.props.workspaceId}/all-dms`} workspaceId={this.props.workspaceId} icon={messages}>All DMs</SidebarOption>
                <SidebarChannels channels={this.props.channels} subscribedChannels={this.props.subscribedChannels.filter(el => el.dm_flag === false)} removeMessage={this.props.removeMessage} receiveMessage={this.props.receiveMessage} sockets={this.props.sockets} currentUser={this.props.currentUser} workspaceId={this.props.workspaceId} deleteChannel={this.props.deleteChannel} createChannel={this.props.createChannel} deleteSubscription = {this.props.deleteSubscription}/>
                <SidebarMessagesContainer deleteSubscription = {this.props.deleteSubscription} removeMessage={this.props.removeMessage} receiveMessage={this.props.receiveMessage} sockets={this.props.sockets} workspaceId={this.props.workspaceId} channels={this.props.subscribedChannels.filter(el => el.dm_flag === true)} workspaceId={this.props.workspaceId}/>
            </div>
        )
    }
}
