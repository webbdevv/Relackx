import React from 'react'
import ChannelBrowser from './channel_browser'
import ChannelShow from './channel_show'
import { Switch, Route } from 'react-router-dom'
export default function Main() {
    return (
        <div className="main">
            <Switch>
                <Route path="/app/:workspaceId/channel-browser" component={ChannelBrowser} />
                <Route path="/app/:workspaceId/:channelId/" component={ChannelShow}/>
            </Switch>
        </div>
    )
}
