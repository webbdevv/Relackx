export const channelSelector = (state, workspaceId) => {
    let channels = Object.values(state.entities.channels)
    return channels.filter(el => el.workspace_id === workspaceId)
}