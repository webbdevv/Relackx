import React from 'react'
import ChannelBrowserContainer from './channel_browser_container'
import ChannelShow from './channel_show'
import { Switch, Route } from 'react-router-dom'
export default function Main() {
    return (
        <div className="main">
            <Switch>
                <Route path="/app/:workspaceId/channel-browser" component={ChannelBrowserContainer} />
                <Route path="/app/:workspaceId/:channelId/" component={ChannelShow}/>
            </Switch>
        </div>
    )
}
