import * as WorkspaceUtil from '../util/workspace_util'

export const RECEIVE_WORKSPACES = 'RECEIVE_WORKSPACES'
export const RECEIVE_WORKSPACE = 'RECEIVE_WORKSPACE'
export const REMOVE_WORKSPACE = 'REMOVE_WORKSPACE'

export const receiveWorkspace = (workspace) => ({
    type: RECEIVE_WORKSPACE,
    workspace
})

export const receiveWorkspaces = (workspaces) => ({
    type: RECEIVE_WORKSPACES,
    workspaces
})

export const removeWorkspace = (workspaceId) => ({
    type: REMOVE_WORKSPACE,
    workspaceId
})

export const fetchWorkspaces = (userId) => dispatch => (
    WorkspaceUtil.fetchWorkspaces(userId).then(workspaces => (
        dispatch(receiveWorkspaces(workspaces))
    ))
)

export const fetchWorkspace = (workspaceId) => dispatch => (
    WorkspaceUtil.fetchWorkspace(workspaceId).then(workspace => (
        dispatch(receiveWorkspace(workspace))
    ))
)

export const createWorkspace = (workspace) => dispatch => (
    WorkspaceUtil.createWorkspace(workspace).then(w => (
        dispatch(receiveWorkspace(workspace))
    ))
)

export const deleteWorkspace = (workspaceId) => dispatch => (
    WorkspaceUtil.deleteWorkspace(workspaceId).then(w => (
        dispatch(removeWorkspace(w.id))
    ))
)

export const updateWorkspace = (workspace) => dispatch => (
    WorkspaceUtil.updateWorkspace(workspace).then(w => (
        dispatch(receiveWorkspace(w.id))
    ))
)