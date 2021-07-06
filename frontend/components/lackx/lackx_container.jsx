import { connect } from 'react-redux'
import { channelSelector } from '../../reducers/selectors'
import Lackx from './lackx'
import { fetchWorkspace } from '../../actions/workspace_actions'
const mSTP = (state, ownProps) => ({
    channels: channelSelector(state, ownProps.match.params.workspaceId),
    users: state.entities.users,
    session: state.session
})

const mDTP = (dispatch) => ({
    fetchWorkspace: workspaceId => dispatch(fetchWorkspace(workspaceId))
})

export default connect(mSTP, mDTP)(Lackx)