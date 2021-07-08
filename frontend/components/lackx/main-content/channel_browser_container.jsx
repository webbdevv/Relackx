import { connect } from 'react-redux'
import ChannelBrowser from './channel_browser'
import { createSubscription, deleteSubscription } from '../../../actions/subscription_actions'
const mSTP = state => ({
    channels: Object.values(state.entities.channels),
    subscriptions: Object.values(state.entities.subscriptions),
    session: state.session,
    subscribedChannelIds: Object.values(state.entities.subscriptions).filter(subscription => subscription.subscriber_id == state.session.id).map(s => s.subscribable_id),
    workspace: state.entities.workspaces.currentWorkspace
})

const mDTP = dispatch => ({
    createSubscription: (subscription) => dispatch(createSubscription(subscription)),
    deleteSubscription: (subscriptionId) => dispatch(deleteSubscription(subscriptionId))
})

export default connect(mSTP, mDTP)(ChannelBrowser)