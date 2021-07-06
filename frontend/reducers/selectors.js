export const channelSelector = (state, id) => {
    return state.entities.channels.filter(el => el.workspace_id === id)
}