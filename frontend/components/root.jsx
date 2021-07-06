import React from 'react'
import { Provider } from 'react-redux'
import SplashPage from './splash_page'
import { Route, HashRouter, Switch } from 'react-router-dom'
import LackxContainer from './lackx/lackx_container'

export default function Root(props) {
    return (
        <Provider store={props.store}>
        <HashRouter>
            <Switch>
                <Route exact path="/app/:workspaceId" component={LackxContainer} />
                <Route exact path="/" component={SplashPage} />
            </Switch>
        </HashRouter>
        </Provider>
    )
}
