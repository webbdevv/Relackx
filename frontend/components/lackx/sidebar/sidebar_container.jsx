import { connect } from 'react-redux'
import Sidebar from './sidebar'
import { subscribedChannelsSelector } from '../../../reducers/selectors'
import { deleteSubscription } from '../../../actions/subscription_actions'

const mSTP = state => ({
    workspaceId: state.session.workspaceId,
    subscribedChannels: subscribedChannelsSelector(state, state.session.id)
})

const mDTP = dispatch => ({
    deleteSubscription: (subscriptionId) => dispatch(deleteSubscription(subscriptionId))
})
export default connect(mSTP, mDTP)(Sidebar)