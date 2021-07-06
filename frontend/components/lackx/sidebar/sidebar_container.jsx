import { connect } from 'react-redux'
import Sidebar from './sidebar'

const mSTP = state => ({
    workspaceId: state.session.workspaceId
})

export default connect(mSTP, null)(Sidebar)