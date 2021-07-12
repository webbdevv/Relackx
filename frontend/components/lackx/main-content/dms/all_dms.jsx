import React from 'react'
import { connect } from 'react-redux'
import { currentUserDMs, dmChannels, selectSubscribedUsers } from '../../../../reducers/selectors'
import MainHeader from '../main_header'
import { createChannel } from '../../../../actions/channel_actions'
import Thumbnail from '../../header/thumbnail'
import { selectMsgsByChannelId, selectUserByMsg } from '../../../../reducers/selectors'
import { createTimestamp } from '../../../../util/misc_util'
import DMSearchContainer from './dm_search'
export const AllDms = (props) => {

    function combineUsers(users){
        return users.map(u => u.first_name + " " + u.last_name).join(", ")
    }

    const dmChannels = props.dmChannels.map((ch, idx) => {
        let messages = selectMsgsByChannelId(props.state, ch.id)
        let lastMsg = messages[messages.length - 1]
        let lastAuthor = selectUserByMsg(lastMsg, props.state.entities.users)
        let subscribedUsers = selectSubscribedUsers(props.state, ch.id)
        let i = subscribedUsers.indexOf(sub => sub.id === props.currentUser.id)
        subscribedUsers.splice(i, 1)
        let bg = {
            backgroundColor: lastAuthor && lastAuthor.fav_color ? lastAuthor.fav_color : ""
        }
        return (<>
            <div className="dm-divider"></div>
            <div className="dm-content">
                <Thumbnail type="thumbnail-msg dm" bg={bg} content={lastAuthor.first_name.slice(0, 1)} />
                <div className="dm-msg">
                    <div className="author">{combineUsers(subscribedUsers)}<span className="timestamp">{createTimestamp(lastMsg.pst_time)}</span></div>
                    <span>{lastAuthor.id === props.currentUser ? "You" : lastAuthor.first_name}: {lastMsg.body}</span>
                </div>
            </div>
        </>)
    })

    return (
        <>
            <MainHeader description=" " type="dm-browser">All Direct Messages</MainHeader>
            <div className="main-content-body dms">
                <DMSearchContainer/>
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
