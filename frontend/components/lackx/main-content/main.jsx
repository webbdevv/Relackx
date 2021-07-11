import React from 'react'
import ChannelBrowserContainer from './channel_browser_container'
import ChannelShowContainer from './channel_show_container'
import { AllDms } from './dms/all_dms'

import { Switch, Route } from 'react-router-dom'
export default function Main() {

    return (
        <div className="main">
            <Switch>
                <Route path="/app/:workspaceId/channel-browser" component={ChannelBrowserContainer} />
                <Route path="/app/:workspaceId/all-dms" component={AllDms}/>
                <Route path="/app/:workspaceId/:channelId" component = {ChannelShowContainer} key={window.location.pathname}/>
            </Switch>
        </div>
    )
}
