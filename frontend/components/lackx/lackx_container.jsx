import { connect } from 'react-redux'
import Lackx from './lackx'
import { fetchWorkspace } from '../../actions/workspace_actions'
const mSTP = (state, ownProps) => ({
    workspace: state.session.workspace
})

const mDTP = (dispatch) => ({
    fetchWorkspace: workspaceId => dispatch(fetchWorkspace(workspaceId))
})

export default connect(mSTP, mDTP)(Lackx)