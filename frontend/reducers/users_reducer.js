import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_WORKSPACE } from "../actions/workspace_actions";
const usersReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser})
        case RECEIVE_WORKSPACE:
            return (action.workspace.workspaceUsers ? action.workspace.workspaceUsers : state)
        default:
            return state;
    }
}
export default usersReducer