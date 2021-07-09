import * as SessionUtil from '../util/session_api_util'
import { receiveSessionErrors } from './error_actions';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const signUp = user => dispatch => (
    SessionUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveSessionErrors(err.responseJSON))
    ))
)

export const login = user => dispatch => (
    SessionUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (dispatch(receiveSessionErrors(err.responseJSON))
    ))
)

export const logout = () => dispatch => (
    SessionUtil.logout().then(() => dispatch(logoutCurrentUser()))
)