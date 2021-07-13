import { connect } from 'react-redux'
import { createChannel } from '../../../actions/channel_actions'
import { createMessage, deleteMessage, updateMessage } from '../../../actions/message_actions'
import { createSubscription } from '../../../actions/subscription_actions'
import Chatbar from './chatbar'
const mapStateToProps = (state) => ({
    currentUserId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    createMessage: (message) => dispatch(createMessage(message)),
    updateMessage: (message) => dispatch(updateMessage(message)),
    deleteMessage: (message) => dispatch(deleteMessage(message)),
    createChannel: (ch) => dispatch(createChannel(ch)),
    createSubscription: (sub) => dispatch(createSubscription(sub))
})

export default connect(mapStateToProps, mapDispatchToProps)(Chatbar)
