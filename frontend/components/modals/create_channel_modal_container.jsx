import { connect } from 'react-redux'
import CreateChannelModal from './create_channel_modal'
import { createSubscription } from '../../actions/subscription_actions'
import { receiveMessage, removeMessage } from '../../actions/message_actions'
const mSTP = state => ({
    sockets: state.sockets,
    workspaceId: state.session.workspace.id,
})
const mDTP = dispatch => ({
    createSubscription: (subscription) => dispatch(createSubscription(subscription)),
    receiveMessage: (msg) => dispatch(receiveMessage(msg)),
    removeMessage: (msg) => dispatch(removeMessage(msg))
})

export default connect(mSTP, mDTP)(CreateChannelModal)