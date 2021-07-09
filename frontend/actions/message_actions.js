import * as MessageUtil from '../util/message_util'
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const REMOVE_MESSAGE = "REMOVE_MESSAGE"

export const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    messages
})

export const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    message
})

export const removeMessage = (messageId) => ({
    type: REMOVE_MESSAGE,
    messageId
})

export const fetchMessages = () => dispatch => (
    MessageUtil.fetchMessages().then(messages => (
        dispatch(receiveMessages(messages))
    ))
)

export const createMessage = (message) => dispatch => (
    MessageUtil.createMessage(message).then(newMessage => (
        dispatch(receiveMessage(newMessage))
    )) 
)

export const updateMessage = (message) => dispatch => (
    MessageUtil.updateMessage(message).then(updatedMessage => (
        dispatch(receiveMessage(updatedMessage))
    ))
)

export const deleteMessage = (messageId) => dispatch => (
    MessageUtil.deleteMessage(messageId).then(deletedMessage => (
        dispatch(removeMessage(deletedMessage.id))
    ))
)