import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL } from "../actions/channel_actions"
import { RECEIVE_WORKSPACE } from "../actions/workspace_actions";
import { RECEIVE_SUBSCRIPTION, REMOVE_SUBSCRIPTION } from "../actions/subscription_actions";

const channelsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_CHANNELS:
            return action.channels
        case RECEIVE_CHANNEL:
            const newChannel = { [action.channel.id]: action.channel }
            return Object.assign({}, state, newChannel);
        case RECEIVE_SUBSCRIPTION:
            debugger
            newState[action.subscription.subscribable_id].userIds.push(action.subscription.subscriber_id)
            return newState
        case REMOVE_SUBSCRIPTION:
            let index = newState[action.subscription.subscribable_id].userIds.indexOf(action.subscription.subscriber_id)
            newState[action.subscription.subscribable_id].userIds.splice(index, 1)
            return newState;
        case REMOVE_CHANNEL:
            delete newState[action.channelId]
            return newState;
        case RECEIVE_WORKSPACE:
            return action.workspace.channels ? action.workspace.channels : state
        default:
            return state
    }
}

export default channelsReducer