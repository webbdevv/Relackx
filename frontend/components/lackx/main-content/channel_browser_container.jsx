import { connect } from 'react-redux'
import ChannelBrowser from './channel_browser'
import { createSubscription } from '../../../actions/subscription_actions'
const mSTP = state => ({
    channels: Object.values(state.entities.channels),
    subscriptions: Object.values(state.entities.subscriptions),
    session: state.session
})

const mDTP = dispatch => ({
    createSubscription: (subscription) => dispatch(createSubscription(subscription))
})

export default connect(mSTP, mDTP)(ChannelBrowser)