import React, { Component } from 'react'
import Thumbnail from './thumbnail'
export default class AppHeader extends Component {
    render() {
        return (
            <div className="app-header">
                <div className="title">
                    App Academy Workspace
                </div>
                <Thumbnail type="thumbnail-header"/>
            </div>
        )
    }
}
