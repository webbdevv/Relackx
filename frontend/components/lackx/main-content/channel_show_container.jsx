import { connect } from 'react-redux'
import ChannelShow from './channel_show'
import { selectMsgsByChannelId } from '../../../reducers/selectors'
import { createMessage, updateMessage, deleteMessage } from '../../../actions/message_actions'
const mSTP = (state, ownProps) => {
    return {
        channel: state.entities.channels[ownProps.match.params.channelId],
        users: state.entities.users,
        messages: selectMsgsByChannelId(state, ownProps.match.params.channelId)
    }
}

const mDTP = dispatch => ({
    createMessage: (msg) => dispatch(createMessage(msg)),
    updateMessage: (msg) => dispatch(updateMessage(msg)),
    deleteMessage: (msgId) => dispatch(deleteMessage(msgId))
})

export default connect(mSTP, mDTP)(ChannelShow)