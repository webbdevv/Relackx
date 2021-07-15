import { RECEIVE_WORKSPACE, RECEIVE_WORKSPACES } from "../actions/workspace_actions"

const workspacesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_WORKSPACES:
            return action.workspaces
        case RECEIVE_WORKSPACE:
            const newState = Object.assign({}, state)
            newState[action.workspace.id] = action.workspace
            return newState
        default:
            return state
    }
}

export default workspacesReducer