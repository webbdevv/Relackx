import { connect } from 'react-redux'
import Landing from './landing'
import { login } from '../../actions/session_actions'

const mDTP = dispatch => ({
    demoUser: (user) => dispatch(login(user))
})

export default connect(null, mDTP)(Landing)