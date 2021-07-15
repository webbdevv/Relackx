import { RECEIVE_MESSAGE, RECEIVE_MESSAGES, REMOVE_MESSAGE } from "../actions/message_actions";
import { RECEIVE_WORKSPACE } from "../actions/workspace_actions";

const messagesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_MESSAGES:
            return action.messages
        case RECEIVE_MESSAGE:
            const newMessage = { [action.message.id]: action.message }
            return Object.assign({}, state, newMessage)
        case REMOVE_MESSAGE:
            let newState = Object.assign({}, state)
            delete newState[action.messageId]
            return newState;
        case RECEIVE_WORKSPACE:
            return Object.assign({}, state, action.workspace.workspaceMessages)
        default:
            return state
    }
}

export default messagesReducer