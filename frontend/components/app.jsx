import React from 'react'
import LackxContainer from '../components/lackx/lackx_container'
import SplashContainer from '../components/landing/splash_container'
import { Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute, WorkspaceRoute } from '../util/route_util'
import WorkspaceIndexContainer from './landing/workspace'
import WorkspaceCreateContainer from './create_workspace/create_workspace'
export default class App extends React.Component{
    render(){
        return (
            <Switch>
                <WorkspaceRoute exact path="/workspaces" component={WorkspaceIndexContainer} />
                <ProtectedRoute path="/app/composer" component={WorkspaceCreateContainer}/>
                <ProtectedRoute path="/app/:workspaceId/:channelId" component={LackxContainer} />
                <AuthRoute exact path="/" component={SplashContainer} />
            </Switch>
        )
    }
}
