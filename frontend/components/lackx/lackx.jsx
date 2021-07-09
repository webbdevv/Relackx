import React, { Component } from 'react'
// import AppHeader from './header/app_header'
import AppHeaderContainer from './header/app_header_container'
import Main from './main-content/main'
import SidebarContainer from './sidebar/sidebar_container'
// import ChannelDescriptionModalContainer from '../modals/channel_description_container'
export default class Lackx extends Component {
    constructor(props){
        super(props)
        this.state = {
            lockScroll: true,
            // descriptionModalOpen: false
        }
        // this.openDescriptionModal = this.openDescriptionModal.bind(this)
        // this.onClose = this.onClose.bind(this)
    }

    // openDescriptionModal(){
    //     this.setState({
    //         descriptionModalOpen: true
    //     })
    // }

    // onClose(){
    //     this.setState({
    //         descriptionModalOpen: false
    //     })
    // }
    componentDidMount(){
        document.body.style.overflow = 'hidden';
        this.props.fetchWorkspace(this.props.match.params.workspaceId)
    }

    render() {
        return (
            <div className="app-container">
                <AppHeaderContainer currentUser={this.props.users[this.props.session.id]} />
                <SidebarContainer session = {this.props} openDescriptionModal={this.openDescriptionModal}/>
                <Main/>
            </div>
        )
    }
}
