export const fetchWorkspaces = () => (
    $.ajax({
        method: "get",
        url: 'api/workspaces'
    })
)

export const fetchWorkspace = (workspaceId) => (
    $.ajax({
        method: 'get',
        url: `api/workspaces/${workspaceId}`
    })
)