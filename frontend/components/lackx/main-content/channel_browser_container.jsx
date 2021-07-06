import { connect } from 'react-redux'
import ChannelBrowser from './channel_browser'

const mSTP = state => ({
    channels: Object.values(state.entities.channels)
})

const mDTP = dispatch => ({

})

export default connect(mSTP, null)(ChannelBrowser)