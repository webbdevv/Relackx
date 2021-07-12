import { connect } from 'react-redux'
import { channelSelector } from '../../reducers/selectors'
import Lackx from './lackx'
import { fetchWorkspace } from '../../actions/workspace_actions'
const mSTP = (state, ownProps) => ({

})

const mDTP = (dispatch) => ({
    fetchWorkspace: workspaceId => dispatch(fetchWorkspace(workspaceId))
})

export default connect(null, mDTP)(Lackx)