import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import MainHeader from '../main_header'
import ChatbarContainer from '../chatbar_container'
import { selectMsgsByChannelId, selectSubscribedUsers } from '../../../../reducers/selectors'
import Message from '../message'
import { sortMessages, combineUsers } from '../../../../util/misc_util'
import Thumbnail from '../../header/thumbnail'
export function DMShow(props){

    const [text, setText] = useState('')
    function scrollToBottom(ele = document.querySelector('.message-container')){
        if(!ele) return 
        ele.scrollTop = ele.scrollHeight
    }

    let messages = sortMessages(props.messages)
        const messageComponents = messages.map((msg, idx) => (
            (<Message text={text} setText={setText} msg={msg} prevCreatedAt = {messages[idx + 1] ? messages[idx + 1].created_time : null} prevAuthorId = {messages[idx + 1] ? messages[idx + 1].author_id : null} key={msg.id} user={props.users[msg.author_id]}>{msg.body}</Message>)
    ))
    
    console.log(props)
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
                    {messageComponents}
                </ul>
            </div>
            <ChatbarContainer text={text} setText={setText} scrollToBottom={scrollToBottom} channel={props.channel} />
        </>
    )
    
}

const mapStateToProps = (state, ownProps) => {
    let copy = selectMsgsByChannelId(state, ownProps.match.params.dmId).reverse()
    return {
        channel: state.entities.channels[ownProps.match.params.dmId],
        messages: copy,
        users: state.entities.users,
        user: state.entities.users[ownProps.match.params.dmId - 100],
        currentUser: state.session.id,
        subscribers: selectSubscribedUsers(state, ownProps.match.params.dmId).filter(el => el.id !== state.session.id)
    }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DMShow)
