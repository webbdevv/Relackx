import { connect } from 'react-redux'
import ChannelShow from './channel_show'
import { selectChannelByParams, selectSubscribedUsers, selectMsgsByChannelId } from '../../../reducers/selectors'
import { createMessage, updateMessage, deleteMessage } from '../../../actions/message_actions'
const mSTP = (state, ownProps) => {
    return {
        channel: selectChannelByParams(state, ownProps.match.params.channelId),
        users: selectSubscribedUsers(state, ownProps.match.params.channelId),
        messages: selectMsgsByChannelId(state, ownProps.match.params.channelId)
    }
}

const mDTP = dispatch => ({
    createMessage: (msg) => dispatch(createMessage(msg)),
    updateMessage: (msg) => dispatch(updateMessage(msg)),
    deleteMessage: (msgId) => dispatch(deleteMessage(msgId))
})

export default connect(mSTP, mDTP)(ChannelShow)