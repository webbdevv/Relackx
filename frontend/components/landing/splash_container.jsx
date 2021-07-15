import { connect } from 'react-redux'
import Splash from './splash'
import { clearSessionErrors, login } from '../../actions/session_actions'

const mDTP = dispatch => ({
    demoUser: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(null, mDTP)(Splash)