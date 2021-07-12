import { connect } from 'react-redux'
import AppHeader from './app_header'
import { logout } from '../../../actions/session_actions'
const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})
export default connect(mSTP, mDTP)(AppHeader)