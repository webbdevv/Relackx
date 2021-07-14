
import React, { Component } from 'react'
import SidebarButton from '../lackx/sidebar/sidebar_button'
import CompositionChannels from './composition_channels'

export default class CompositionSidebar extends Component {
    render() {
        return (
            <div className="sidebar-container">
                <SidebarButton/>
                <CompositionChannels/>
            </div>
        )
    }
}
