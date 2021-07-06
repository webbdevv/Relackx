export const channelSelector = (state, workspaceId) => {
    let channels = Object.values(state.entities.channels)
    return channels.filter(el => el.workspace_id === workspaceId)
}

export const subscribedChannelsSelector = (state, userId) => {
    let channels = Object.values(state.entities.channels)
    let subscription_ids = Object.values(state.entities.subscriptions).filter(s => 
        s.subscriber_id === userId).map(s => 
            s.subscribable_id)
    return channels.filter(channel => 
        subscription_ids.includes(channel.id)
    )
}