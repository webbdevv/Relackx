export const fetchWorkspaces = (user_id) => (
    $.ajax({
        method: "get",
        url: `api/users/${user_id}/workspaces`,
    })
)

export const fetchWorkspace = (workspaceId) => (
    $.ajax({
        method: 'get',
        url: `api/workspaces/${workspaceId}`
    })
)

export const createWorkspace = (workspace) => (
    $.ajax({
        method: 'post',
        url: `api/workspaces`,
        data: { workspace }
    })
)

export const deleteWorkspace = (workspaceId) => (
    $.ajax({
        method: 'delete',
        url: `api/workspaces/${workspaceId}`
    })
)

export const updateWorkspace = (workspace) => (
    $.ajax({
        method: 'patch',
        url: `api/workspaces/${workspace.id}`,
        data: {workspace}
    })
)