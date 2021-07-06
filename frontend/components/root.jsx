import React from 'react'
import { Provider } from 'react-redux'
import App from './app'
import { HashRouter } from 'react-router-dom'

export default function Root(props) {
    return (
        <Provider store={props.store}>
        <HashRouter>
            <App/>
        </HashRouter>
        </Provider>
    )
}
