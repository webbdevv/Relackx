import * as WorkspaceUtil from '../util/workspace_util'

export const RECEIVE_WORKSPACES = 'RECEIVE_WORKSPACES'
export const RECEIVE_WORKSPACE = 'RECEIVE_WORKSPACE'

export const receiveWorkspace = (workspace) => ({
    type: RECEIVE_WORKSPACE,
    workspace
})

export const receiveWorkspaces = (workspaces) => ({
    type: RECEIVE_WORKSPACES,
    workspaces
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