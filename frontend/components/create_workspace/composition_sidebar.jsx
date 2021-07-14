
import React from 'react'
import SidebarButton from '../lackx/sidebar/sidebar_button'
// import CompositionChannels from './composition_channels'

export default function CompositionSidebar(props){
    return (
        <div className="sidebar-container">
            <SidebarButton content={props.name}/>
        </div>
    )
}
