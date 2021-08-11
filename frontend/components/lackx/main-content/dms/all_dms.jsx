import React from 'react'
import { connect } from 'react-redux'
import { currentUserDMs, dmChannels, selectSubscribedUsers } from '../../../../reducers/selectors'
import MainHeader from '../main_header'
import { createChannel } from '../../../../actions/channel_actions'
import Thumbnail from '../../header/thumbnail'
import { selectMsgsByChannelId, selectUserByMsg } from '../../../../reducers/selectors'
import { createTimestamp } from '../../../../util/misc_util'
import { fullName } from '../../../../util/misc_util'
import DMSearchContainer from './dm_search'
import MsgDivider from '../../util/msg_divider'

export const AllDms = (props) => {
    const dmChannels = props.dmChannels.map((ch, idx) => {
        let messages = selectMsgsByChannelId(props.state, ch.id)
        let lastMsg = messages[messages.length - 1]
        let lastAuthor = selectUserByMsg(lastMsg, props.state.entities.users)
        let subscribedUsers = selectSubscribedUsers(props.state, ch.id)
        let recipient = subscribedUsers.find(el => el.id !== props.currentUser)
        let i = subscribedUsers.indexOf(sub => sub.id === props.currentUser.id)
        subscribedUsers.splice(i, 1)
        let bg = {
            backgroundColor: recipient && recipient.fav_color ? recipient.fav_color : ""
        }
        return (
        
        <div className="dm-wrapper" id={`dm-${ch.id}`} key={ch.id}>
            <div className="dm-content">
                <Thumbnail type="thumbnail-msg dm" bg={bg} content={recipient.first_name.slice(0, 1)} />
                <div className="dm-msg">
                    <div className="author">{fullName(recipient)}<span className="timestamp">{createTimestamp(lastMsg.created_at)}</span></div>
                    <span>{lastAuthor.id === props.currentUser ? "You" : lastAuthor.first_name}: {lastMsg.body}</span>
                </div>
            </div>
        </div>
        )
    })

    return (
        <>
            <MainHeader description=" " type="dm-browser">All Direct Messages</MainHeader>
            <div className="main-content-body dms">
                <DMSearchContainer dmChannels={props.dmChannels} key="dm-search"/>
                <div className="dms-container">
                    {dmChannels}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.session.id,
    // dms: currentUserDMs(state, state.session.id),
    dmChannels: dmChannels(state, state.session.id),
    state: state
})

const mapDispatchToProps = dispatch => ({
    createChannel: (channel) => dispatch(createChannel(channel))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllDms)
