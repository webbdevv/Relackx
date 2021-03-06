import * as UserUtil from '../util/user_util'
export const RECEIVE_USER = "RECEIVE_USER"
export const RECEIVE_USERS = "RECEIVE_USERS"

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})


export const fetchUser = (userId) => dispatch => (
    UserUtil.fetchUser(userId).then(user => (
        dispatch(receiveUser(user))
    ))
)

export const fetchUsers = () => dispatch => (
    UserUtil.fetchUsers().then(users => (
        dispatch(receiveUsers(users))
    )) 
)
