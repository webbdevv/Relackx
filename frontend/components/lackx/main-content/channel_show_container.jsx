import { connect } from 'react-redux'
import ChannelShow from './channel_show'
import { selectChannelByParams } from '../../../reducers/selectors'
const mSTP = (state, ownProps) => ({
    channel: selectChannelByParams(state, ownProps.match.params.channelId)
})

const mDTP = dispatch => ({

})

export default connect(mSTP, null)(ChannelShow)