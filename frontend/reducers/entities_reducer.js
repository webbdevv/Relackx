import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import channelsReducer from "./channels_reducer";
import subscriptionsReducer from "./subscription_reducer";
import workspacesReducer from "./workspaces_reducer";
import messagesReducer from "./messages_reducer";

export default combineReducers({
    users: usersReducer,
    channels: channelsReducer,
    subscriptions: subscriptionsReducer,
    workspaces: workspacesReducer,
    messages: messagesReducer
})