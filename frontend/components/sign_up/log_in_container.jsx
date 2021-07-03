import { connect } from 'react-redux'
import LogInForm from './log_in_form'
import { login } from '../../actions/session_actions'
import { withRouter } from 'react-router'
const mSTP = state => ({
    user: {
        email: '',
        password: ''
    },
    errors: state.errors.sessionErrors.join(', ')
})

const mDTP = dispatch => ({
    login: (user) => dispatch(login(user))
})

let connected = connect(mSTP, mDTP)(LogInForm)
export default withRouter(connected)