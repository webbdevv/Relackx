export const channelSelector = (state, workspaceId) => {
    let channels = Object.values(state.entities.channels)
    return channels.filter(el => el.workspace_id === workspaceId)
}

export const selectChannelByParams = (state, channelId) => {
    channelId = Number(channelId)
    let channels = Object.values(state.entities.channels)
    let channel = channels.find(chan => chan.id === channelId)
    return channel
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
export const selectSubscribedUsers = (state, channelId) => {
    let subscriptions = Object.values(state.entities.subscriptions).filter(s => s.subscribable_id == channelId)
    let users = subscriptions.map(subscription => state.entities.users[subscription.subscriber_id])
    
    return users
}
export const selectMsgsByChannelId = (state, channelId) => {
    return Object.values(state.entities.messages).filter(msg => msg.channel_id == channelId)
}
export const currentUserDMs = (state, userId) => {
    return Object.values(state.entities.messages).filter(msg => msg.dm_msg === true && msg.author_id === userId)
}