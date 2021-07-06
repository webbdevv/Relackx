import * as ChannelUtil from '../util/channel_util'

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS'
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL'
export const REMOVE_CHANNEL = "REMOVE_CHANNEL"

export const receiveChannels = channels => ({
    type: RECEIVE_CHANNELS,
    channels
})

export const receiveChannel = (channel) => ({
    type: RECEIVE_CHANNEL,
    channel
})

export const removeChannel = (channelId) => ({
    type: REMOVE_CHANNEL,
    channelId
})

export const createChannel = channel => dispatch => (
    ChannelUtil.createChannel(channel).then(channel => (
        dispatch(receiveChannel(channel))
    ))
)

export const fetchChannels = channels => dispatch => (
    ChannelUtil.fetchChannels(channels).then(channels => (
        dispatch(receiveChannels(channels))
    ))
)

export const fetchChannel = channelId => dispatch => (
    ChannelUtil.fetchChannel(channelId).then(channel => (
        dispatch(receiveChannel(channel))
    ))
)

export const updateChannel = channel => dispatch => (
    ChannelUtil.updateChannel(channel).then(updatedChannel => (
        dispatch(receiveChannel(updatedChannel))
    ))
)