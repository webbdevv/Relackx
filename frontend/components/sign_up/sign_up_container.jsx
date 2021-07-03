import { connect } from 'react-redux'
import SignUpForm from './sign_up_form'
import { signUp } from '../../actions/session_actions'
import { receiveSessionErrors, } from '../../actions/error_actions'
import { withRouter } from 'react-router'

const mSTP = state => ({
    user: {
        email: '',
        first_name: '',
        last_name: '',
        fav_color: '',
        password: ''
    },
    errors: state.errors.sessionErrors.join(', ')
})

const mDTP = dispatch => ({
    signUp: (user) =>  dispatch(signUp(user))
})

let connected = connect(mSTP,mDTP)(SignUpForm)
export default withRouter(connected)
