import { RECEIVE_WORKSPACE, RECEIVE_WORKSPACES } from "../actions/workspace_actions"

const workspacesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_WORKSPACES:
            return action.workspaces
        case RECEIVE_WORKSPACE:
            const { name, id, owner_id } = action.workspace
            const newWorkspace = { currentWorkspace: {
                name, id, owner_id
            }}
            return Object.assign({}, state, newWorkspace)
        default:
            return state
    }
}

export default workspacesReducer