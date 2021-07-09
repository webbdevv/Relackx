import { connect } from 'react-redux'
import AppHeader from './app_header'
import { logout } from '../../../actions/session_actions'
const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(null, mDTP)(AppHeader)