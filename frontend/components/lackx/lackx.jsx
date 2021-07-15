import React, { useState, useEffect } from 'react'
// import AppHeader from './header/app_header'
import AppHeaderContainer from './header/app_header_container'
import Main from './main-content/main'
import SidebarContainer from './sidebar/sidebar_container'
// import ChannelDescriptionModalContainer from '../modals/channel_description_container'
export default function Lackx(props){
    const [mount, setMount] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if(props.history.location.pathname === '/workspaces') return null;
        props.fetchWorkspace(props.match.params.workspaceId).then(() => {
            setLoading(false);
            document.body.style.overflow = 'hidden'
        })
    }, [mount])

    if(loading) return <div className='loading'>Loading</div>
    return (
        <div className="app-container">
            <AppHeaderContainer workspace={props.workspace}/>
            <SidebarContainer/>
            <Main/>
        </div>
    )
}
