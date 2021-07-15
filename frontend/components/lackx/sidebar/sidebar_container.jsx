import { connect } from 'react-redux'
import Sidebar from './sidebar'
import { subscribedChannelsSelector } from '../../../reducers/selectors'
import { createSubscription, deleteSubscription } from '../../../actions/subscription_actions'
import { createChannel, deleteChannel } from '../../../actions/channel_actions'
import { receiveMessage, removeMessage } from '../../../actions/message_actions'
import { withRouter } from 'react-router-dom'
const mSTP = (state, ownProps) => ({
    subscribedChannels: subscribedChannelsSelector(state, state.session.id),
    channels: Object.values(state.entities.channels),
    currentUser: state.session.id,
    sockets: state.sockets,
    workspace: state.session.workspace,
    workspaceId: ownProps.match.params.workspaceId
})

const mDTP = dispatch => ({
    createSubscription: (subscription) => dispatch(createSubscription(subscription)),
    deleteSubscription: (subscriptionId) => dispatch(deleteSubscription(subscriptionId, "Channel")),
    createChannel: (channel) => dispatch(createChannel(channel)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    removeMessage: (messageId) => dispatch(removeMessage(messageId))
})
export default withRouter(connect(mSTP, mDTP)(Sidebar))