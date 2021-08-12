import { connect } from 'react-redux'
import Lackx from './lackx'
import { fetchWorkspace } from '../../actions/workspace_actions'
import { receiveChannel } from '../../actions/channel_actions'
const mSTP = (state, ownProps) => ({
    workspace: state.session.workspace
})

const mDTP = (dispatch) => ({
    fetchWorkspace: workspaceId => dispatch(fetchWorkspace(workspaceId)),
    receiveChannel: (ch) => dispatch(receiveChannel(ch))
})

export default connect(mSTP, mDTP)(Lackx)