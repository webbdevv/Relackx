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