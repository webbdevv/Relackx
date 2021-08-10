import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { selectMsgsByChannelId, selectSubscribedUsers } from '../../../../reducers/selectors'
import { sortMessages } from '../../../../util/misc_util'
import ChatbarContainer from '../chatbar_container'
import MainHeader from '../main_header'
import Message from '../message'
import Thumbnail from '../../header/thumbnail'

export const DMChannelShow = (props) => {
    const [text, setText] = useState('')
    const [mount, setMount] = useState(false)
    useEffect(() => {
        setMount(true)
    }, [mount])
    useEffect(() => {
        if(mount === true){
            scrollToBottom()
        }
    }, [mount])

    let messages = sortMessages(props.messages)
    const messageComponents = messages.map((msg, idx) => (
        (<Message key={msg.id} user={props.users[msg.author_id]} text={text} currentUser={props.currentUser} setText={setText} msg={msg} //data, next line has tools
                prevCreatedAt = {messages[idx + 1] ? messages[idx + 1].created_at : null} prevAuthorId = {messages[idx + 1] ? messages[idx + 1].author_id : null} > 
        {msg.body}</Message>)
    ))
    function scrollToBottom(ele = document.querySelector('.message-container')){
        if(!ele) return 
        ele.scrollTop = ele.scrollHeight
    }
    return (
        <>
            <MainHeader thumbBg={{backgroundColor: props.user.fav_color}} channel={props.channel} thumbType="thumbnail dm" user={props.user} type="dm-channel" description=" ">{props.user.first_name + " " + props.user.last_name}</MainHeader>
            <div className="main-content-body">
                <ul className="message-container">
                    {messageComponents}
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
            <ChatbarContainer placeholder={`Send a message to ${props.user.first_name + " " + props.user.last_name}`} workspaceId={props.workspaceId} user={props.user} currentUser={props.currentUser} text={text} setText={setText} scrollToBottom={scrollToBottom} channel={props.channel} />
            </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    let copy = selectMsgsByChannelId(state, ownProps.match.params.channelId).reverse()
    let subscribers = selectSubscribedUsers(state, ownProps.match.params.channelId).filter(el => el.id !== state.session.id)
    return {
        channel: state.entities.channels[ownProps.match.params.channelId],
        messages: copy,
        workspaceId: state.session.workspace.id,
        users: state.entities.users,
        currentUser: state.session.id,
        subscribers: selectSubscribedUsers(state, ownProps.match.params.channelId).filter(el => el.id !== state.session.id),
        user: subscribers[0]    //until group implementation
    }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DMChannelShow)
