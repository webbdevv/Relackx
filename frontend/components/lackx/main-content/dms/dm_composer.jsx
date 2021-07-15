import React, { useState} from 'react'
import { connect } from 'react-redux'
import MainHeader from '../main_header'
import ChatbarContainer from '../chatbar_container'
import Thumbnail from '../../header/thumbnail'
import { createSubscription } from '../../../../actions/subscription_actions'
import { createChannel } from '../../../../actions/channel_actions'
import { createMessage, receiveMessage, removeMessage } from '../../../../actions/message_actions'
import { createSocket } from '../../../../util/misc_util'

export function DMShowComposer(props){

    const [text, setText] = useState('')
    function scrollToBottom(ele = document.querySelector('.message-container')){
        if(!ele) return 
        ele.scrollTop = ele.scrollHeight
    }

    function createChannel(){
        props.createChannel({
            name: `dm/${props.currentUser}/${props.user.id}`,
            owner_id: props.currentUser,
            is_private: true,
            dm_flag: true,
            workspace_id: props.workspaceId,
        }).then(action => {
            createSocket(props.receiveMessage, props.removeMessage, props.sockets, action.channel.id)
            let sub1 = props.createSubscription({
                subscriber_id: props.currentUser,
                subscribable_type: "Channel",
                subscribable_id: action.channel.id,
                admin: true
            })
            let sub2 = props.createSubscription({
                subscriber_id: props.user.id,
                subscribable_type: "Channel",
                subscribable_id: action.channel.id,
                admin: true
            }).then(payload => {
                props.createMessage({
                    author_id: props.currentUser,
                    channel_id: action.channel.id,
                    body: text
                }).then((msg) => {
                    props.receiveMessage(msg)
                    props.history.push(`/app/${props.workspaceId}/dms/${action.channel.id}`)
                })
            })
        })
    }

    return (
        <>
            <MainHeader thumbBg={{backgroundColor: props.user.fav_color}} channel={props.channel} thumbType="thumbnail dm" user={props.user} type="dm-channel" description=" ">{props.user.first_name + " " + props.user.last_name}</MainHeader>
            <div className="main-content-body">
                <ul className="message-container">
                    <div className="message first-message">
                        <div className="wrapper">
                            <Thumbnail bg={{backgroundColor: props.user.fav_color}} type="thumbnail dm-large" user={props.user} content={props.user.first_name.slice(0, 1)}/>
                            <div className="message-panel-header">
                                <strong className="bold">{props.user.first_name}</strong>
                                <p>{props.user.email}</p>
                            </div>
                        </div>
                        <div className="description">
                            This is the very beginning of your direct message history with {props.user.first_name}
                        </div>
                    </div>
                </ul>
            </div>
            <ChatbarContainer createChannel={createChannel} workspaceId={props.workspaceId} user={props.user} currentUser={props.currentUser} text={text} setText={setText} scrollToBottom={scrollToBottom} channel={props.channel} />
        </>
    )
    
}

const mapStateToProps = (state, ownProps) => {
    return {
        workspaceId: state.session.workspace.id,
        user: state.entities.users[ownProps.match.params.userId],
        currentUser: state.session.id,
        sockets: state.sockets
    }
}

const mapDispatchToProps = dispatch => ({
    createSubscription: (sub) => dispatch(createSubscription(sub)),
    createChannel: (ch) => dispatch(createChannel(ch)),
    createMessage: (msg) => dispatch(createMessage(msg)),
    receiveMessage: (msg) => dispatch(receiveMessage(msg)),
    removeMessage: (msgId) => dispatch(removeMessage(msgId))
})

export default connect(mapStateToProps, mapDispatchToProps)(DMShowComposer)
