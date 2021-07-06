import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL } from "../actions/channel_actions";

const channelsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_CHANNELS:
            return action.channels
        case RECEIVE_CHANNEL:
            const newChannel = { [action.channel.id]: action.channel }
            return Object.assign({}, state, newChannel)
        case REMOVE_CHANNEL:
            let newState = Object.assign({}, state)
            delete newState[action.channelId]
            return newState
        default:
            return state
    }
}

export default channelsReducer