import { connect } from 'react-redux'
import Lackx from './lackx'
import { fetchWorkspace } from '../../actions/workspace_actions'
import { receiveChannel } from '../../actions/channel_actions'
import { receiveSubscription } from '../../actions/subscription_actions'
import { receiveMessage } from '../../actions/message_actions'
const mSTP = (state, ownProps) => ({
    workspace: state.session.workspace
})

const mDTP = (dispatch) => ({
    fetchWorkspace: workspaceId => dispatch(fetchWorkspace(workspaceId)),
    receiveChannel: (ch) => dispatch(receiveChannel(ch)),
    receiveSubscription: (sub) => dispatch(receiveSubscription(sub)),
    receiveMessage: (msg) => dispatch(receiveMessage(msg)),
    removeMessage: (msgId) => dispatch(removeMessage(msgId))
})

export default connect(mSTP, mDTP)(Lackx)