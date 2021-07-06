import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_WORKSPACE } from "../actions/workspace_actions";

const _nullUser = Object.freeze({
    id: null,
    workspaceId: null
})
export default (state = _nullUser, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id}
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        case RECEIVE_WORKSPACE:
            let newState = Object.assign({}, state, {workspaceId: action.workspace.id})
            return newState;
        default:
            return state;
    }
}

