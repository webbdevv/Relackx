import React from 'react'
import { Provider } from 'react-redux'
import App from './app'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Lackx from './lackx/lackx'

export default function Root(props) {
    return (
        <Provider store={props.store}>
        <HashRouter>
            <Switch>
                <Route exact path="/app" component={Lackx} />
                <Route exact path="/" component={App} />
            </Switch>
        </HashRouter>
        </Provider>
    )
}
