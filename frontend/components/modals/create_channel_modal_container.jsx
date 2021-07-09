import { connect } from 'react-redux'
import CreateChannelModal from './create_channel_modal'
import { createSubscription } from '../../actions/subscription_actions'
const mDTP = dispatch => ({
    createSubscription: (subscription) => dispatch(createSubscription(subscription))
})

export default connect(null, mDTP)(CreateChannelModal)