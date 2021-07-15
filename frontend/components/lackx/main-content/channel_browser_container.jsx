import { connect } from 'react-redux'
import ChannelBrowser from './channel_browser'
import { createSubscription, deleteSubscription } from '../../../actions/subscription_actions'
import { createChannel } from '../../../actions/channel_actions'
const mSTP = state => ({
    channels: Object.values(state.entities.channels).filter(ch => ch.dm_flag === false),
    subscriptions: Object.values(state.entities.subscriptions),
    session: state.session,
    subscribedChannelIds: Object.values(state.entities.subscriptions).filter(subscription => subscription.subscriber_id == state.session.id).map(s => s.subscribable_id),
    workspace: state.entities.workspaces.currentWorkspace,
    currentUser: state.session.id
})

const mDTP = dispatch => ({
    createSubscription: (subscription) => dispatch(createSubscription(subscription)),
    deleteSubscription: (subscriptionId) => dispatch(deleteSubscription(subscriptionId, "Channel")),
    createChannel: (channel) => dispatch(createChannel(channel))
})

export default connect(mSTP, mDTP)(ChannelBrowser)