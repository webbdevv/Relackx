import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import MainHeader from '../main_header'
import ChatbarContainer from '../chatbar_container'
import { selectSubscribedUsers } from '../../../../reducers/selectors'
import Thumbnail from '../../header/thumbnail'
export function DMShowComposer(props){

    const [text, setText] = useState('')
    function scrollToBottom(ele = document.querySelector('.message-container')){
        if(!ele) return 
        ele.scrollTop = ele.scrollHeight
    }

    function createChannel(){

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
            <ChatbarContainer workspaceId={props.workspaceId} user={props.user} currentUser={props.currentUser} text={text} setText={setText} scrollToBottom={scrollToBottom} channel={props.channel} />
        </>
    )
    
}

const mapStateToProps = (state, ownProps) => {
    // let copy = selectMsgsByChannelId(state, ownProps.match.params.userId)
    return {
        // channel: state.entities.channels[ownProps.match.params.userId],
        // messages: copy,
        workspaceId: state.session.workspace.id,
        // users: state.entities.users,
        user: state.entities.users[ownProps.match.params.userId],
        currentUser: state.session.id,
        // subscribers: selectSubscribedUsers(state, ownProps.match.params.userId).filter(el => el.id !== state.session.id)
    }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DMShowComposer)
