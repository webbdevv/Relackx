import { connect } from 'react-redux'
import ChannelDescriptionModal from './channel_description_modal'
import { deleteChannel, updateChannel } from '../../actions/channel_actions'
import { deleteSubscription } from '../../actions/subscription_actions'
import { isAdmin } from '../../util/misc_util'
const mSTP = (state, ownProps) => ({
    channel: state.entities.channels[ownProps.channel_id],
    users: state.entities.users,
    currentUser: state.session.id,
    generalChannel: state.session.workspace.general_channel,
    workspaceId: state.session.workspace.id
})

const mDTP = dispatch => ({
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
    updateChannel: (channel) => dispatch(updateChannel(channel)),
    deleteSubscription: (subscribableId) => dispatch(deleteSubscription(subscribableId, "Channel"))
})

export default connect(mSTP, mDTP)(ChannelDescriptionModal)