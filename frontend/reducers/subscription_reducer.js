import { RECEIVE_SUBSCRIPTION, RECEIVE_SUBSCRIPTIONS, REMOVE_SUBSCRIPTION } from "../actions/subscription_actions"

const subscriptionsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_SUBSCRIPTIONS:
            return action.subscriptions
        case RECEIVE_SUBSCRIPTION:
            const newSubscription = { [action.subscription.id]: action.subscription }
            return Object.assign({}, state, newSubscription)
        case REMOVE_SUBSCRIPTION:
            let newState = Object.assign({}, state)
            delete newState[action.subscriptionId]
            return newState
        default:
            return state
    }
}

export default subscriptionsReducer