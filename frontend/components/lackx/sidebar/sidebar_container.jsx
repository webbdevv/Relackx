import { connect } from 'react-redux'
import Sidebar from './sidebar'
import { subscribedChannelsSelector } from '../../../reducers/selectors'
import { deleteSubscription } from '../../../actions/subscription_actions'
import { createChannel, deleteChannel } from '../../../actions/channel_actions'
import { receiveMessage } from '../../../actions/message_actions'

const mSTP = state => ({
    workspaceId: state.session.workspaceId,
    subscribedChannels: subscribedChannelsSelector(state, state.session.id),
    channels: Object.values(state.entities.channels),
    currentUser: state.session.id,
    sockets: state.sockets
})

const mDTP = dispatch => ({
    deleteSubscription: (subscriptionId) => dispatch(deleteSubscription(subscriptionId, "Channel")),
    createChannel: (channel) => dispatch(createChannel(channel)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
    receiveMessage: (message) => dispatch(receiveMessage(message))
})
export default connect(mSTP, mDTP)(Sidebar)