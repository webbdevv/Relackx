import React from 'react'
import ChannelBrowserContainer from './channel_browser_container'
import ChannelShowContainer from './channel_show_container'
import AllDMsContainer from './dms/all_dms'
import DMShowComposer from './dms/dm_composer'
import { Switch, Route } from 'react-router-dom'
import DMChannelShow from './dms/dm_channel_show'
export default function Main(props) {
    return (
        <div className="main">
            <Switch>
                <Route path="/app/:workspaceId/dms/:channelId" component={DMChannelShow}/>
                <Route path="/app/:workspaceId/composer/:userId" component={DMShowComposer}/>
                <Route path="/app/:workspaceId/channel-browser" component={ChannelBrowserContainer} />
                <Route path="/app/:workspaceId/all-dms" component={AllDMsContainer}/>
                <Route path="/app/:workspaceId/:channelId" component = {ChannelShowContainer} key={window.location.pathname}/>
            </Switch>
        </div>
    )
}
