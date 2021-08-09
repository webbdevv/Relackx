import * as SubscriptionUtil from '../util/subscriptions_util'

export const RECEIVE_SUBSCRIPTIONS = 'RECEIVE_SUBSCRIPTIONS'
export const RECEIVE_SUBSCRIPTION = 'RECEIVE_SUBSCRIPTION'
export const REMOVE_SUBSCRIPTION = "REMOVE_SUBSCRIPTION"

export const receiveSubscriptions = subscriptions => ({
    type: RECEIVE_SUBSCRIPTIONS,
    subscriptions
})

export const receiveSubscription = (subscription) => ({
    type: RECEIVE_SUBSCRIPTION,
    subscription
})

export const removeSubscription = (subscription) => ({
    type: REMOVE_SUBSCRIPTION,
    subscription
})

export const createSubscription = subscription => dispatch => (
    SubscriptionUtil.createSubscription(subscription).then(subscription => (
        dispatch(receiveSubscription(subscription))
    ))
)

export const fetchSubscriptions = subscriptions => dispatch => (
    SubscriptionUtil.fetchSubscriptions(subscriptions).then(subscriptions => (
        dispatch(receiveSubscriptions(subscriptions))
    ))
)

export const fetchSubscription = subscriptionId => dispatch => (
    SubscriptionUtil.fetchSubscription(subscriptionId).then(subscription => (
        dispatch(receiveSubscription(subscription))
    ))
)

export const deleteSubscription = (subscriptionId, subscribableType) => dispatch => (
    SubscriptionUtil.deleteSubscription(subscriptionId, subscribableType).then(subscription => (
        dispatch(removeSubscription(subscription))
    ))
)