import { connect } from 'react-redux'
import ChannelDescriptionModal from './channel_description_modal'
import { deleteChannel, updateChannel } from '../../actions/channel_actions'
import { deleteSubscription } from '../../actions/subscription_actions'
const mSTP = (state, ownProps) => ({
    channel: state.entities.channels[ownProps.channel_id],
    users: state.entities.users
})

const mDTP = dispatch => ({
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
    updateChannel: (channel) => dispatch(updateChannel(channel)),
    deleteSubscription: (subscribableId) => dispatch(deleteSubscription(subscribableId, "Channel"))
})

export default connect(mSTP, mDTP)(ChannelDescriptionModal)