import { connect } from 'react-redux'
import Splash from './splash'
import { login } from '../../actions/session_actions'

const mDTP = dispatch => ({
    demoUser: (user) => dispatch(login(user))
})

export default connect(null, mDTP)(Splash)