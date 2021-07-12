import React from 'react'
import { connect } from 'react-redux'
import MainHeader from '../main_header'
import ChatbarContainer from '../chatbar_container'
import { selectMsgsByChannelId, selectSubscribedUsers } from '../../../../reducers/selectors'
import Message from '../message'
import { sortMessages, combineUsers } from '../../../../util/misc_util'

export class DMShow extends React.Component{
    constructor(props){
        super(props)
        this.scrollToBottom = this.scrollToBottom.bind(this)
        this.state = {
            text: "",
            edit: false
        }
        this.setText = this.setText.bind(this)
    }

    setText(text){
        this.setState({
            text: text
        })
    }

    scrollToBottom(ele = document.querySelector('.message-container')){
        if(!ele) return 
        ele.scrollTop = ele.scrollHeight
    }

    render(){
        let messages = sortMessages(this.props.messages)
            const messageComponents = messages.map((msg, idx) => (
                (<Message text={this.state.text} setText={this.setText} msg={msg} prevCreatedAt = {messages[idx + 1] ? messages[idx + 1].created_time : null} prevAuthorId = {messages[idx + 1] ? messages[idx + 1].author_id : null} key={msg.id} user={this.props.users[msg.author_id]}>{msg.body}</Message>)
        ))
        return (
            <>
                <MainHeader channel={this.props.channel} thumbType="thumbnail dm" user={this.props.subscribers[0]} type="dm-channel" description=" ">{combineUsers(this.props.subscribers)}</MainHeader>
                <div className="main-content-body">
                    <ul className="message-container">
                        {messageComponents}
                    </ul>
                </div>
                <ChatbarContainer edit={this.state.edit} text={this.state.text} setText={this.setText} scrollToBottom={this.scrollToBottom} channel={this.props.channel} />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let copy = selectMsgsByChannelId(state, ownProps.match.params.dmId).reverse()
    return{
    channel: state.entities.channels[ownProps.match.params.dmId],
    messages: copy,
    users: state.entities.users,
    currentUser: state.session.id,
    subscribers: selectSubscribedUsers(state, ownProps.match.params.dmId).filter(el => el.id !== state.session.id)
}}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DMShow)
