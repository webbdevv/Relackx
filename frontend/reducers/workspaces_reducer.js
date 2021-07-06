import { RECEIVE_WORKSPACE, RECEIVE_WORKSPACES } from "../actions/workspace_actions"

const workspaceReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_WORKSPACES:
            return action.workspaces
        case RECEIVE_WORKSPACE:
            const newWorkspace = { [action.workspace.id]: action.workspace }
            return Object.assign({}, state, newWorkspace)
        default:
            return state
    }
}

export default workspaceReducer