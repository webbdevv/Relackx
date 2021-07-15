import { RECEIVE_SESSION_ERRORS } from "../actions/error_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { CLEAR_SESSION_ERRORS } from "../actions/session_actions";

export default (state = [], action) => {
    Object.assign(state)
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_SESSION_ERRORS:
            return [];
        default:
            return state
    }
}