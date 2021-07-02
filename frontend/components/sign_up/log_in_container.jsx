import { connect } from 'react-redux'
import LogInForm from './log_in_form'
import { login } from '../../actions/session_actions'

const mSTP = state => ({
    user: {
        email: '',
        password: ''
    },
    errors: state.errors.session
})

const mDTP = dispatch => ({
    login: (user) =>  dispatch(login(user))
})

export default connect(mSTP,mDTP)(LogInForm)