import { connect } from "react-redux"
import { receiveMessage, removeMessage } from "../../../actions/message_actions"
import SidebarChannels from "./sidebar_channels"

const mSTP = state => ({
    sockets: state.sockets,
    workspaceId: state.session.workspace.id
})

const mDTP = dispatch => ({
    receiveMessage: (msg) => dispatch(receiveMessage(msg)),
    removeMessage: (msgId) => dispatch(removeMessage(msgId)),
})

export default connect(mSTP, mDTP)(SidebarChannels)