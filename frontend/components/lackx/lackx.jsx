import React, { Component } from 'react'
import AppHeader from './header/app_header'
import Main from './main-content/main'
import SidebarContainer from './sidebar/sidebar_container'

export default class Lackx extends Component {
    constructor(props){
        super(props)
        this.state = {
            lockScroll: true
        }
    }
    componentDidMount(){
        document.body.style.overflow = 'hidden';
        this.props.fetchWorkspace(this.props.match.params.workspaceId)
    }

    render() {
        return (
            <div className="app-container">

                    <AppHeader/>
                    <SidebarContainer session = {this.props}/>
                    <Main/>
            </div>
        )
    }
}
