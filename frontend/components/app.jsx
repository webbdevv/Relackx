import React from 'react'
import LackxContainer from '../components/lackx/lackx_container'
import LandingContainer from '../components/landing/landing_container'
import { Switch, Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
export default class SplashPage extends React.Component{
    render(){
        return (
            <Switch>
                <ProtectedRoute path="/app/:workspaceId" component={LackxContainer} />
                <AuthRoute exact path="/" component={LandingContainer} />
            </Switch>
        )
    }
}
