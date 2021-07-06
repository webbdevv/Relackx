import { connect } from 'react-redux'
import { channelSelector } from '../../reducers/selectors'
import Lackx from './lackx'
const mSTP = (state, ownProps) => ({
    channels: channelSelector(id, ownProps.match.params.workspaceId)
})

const mDTP = dispatch => ({

})

export default connect(mSTP, null)(Lackx)