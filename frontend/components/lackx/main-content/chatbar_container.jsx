import { connect } from 'react-redux'
import { createMessage, deleteMessage, updateMessage } from '../../../actions/message_actions'
import Chatbar from './chatbar'
const mapStateToProps = (state) => ({
    currentUserId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    createMessage: (message) => dispatch(createMessage(message)),
    updateMessage: (message) => dispatch(updateMessage(message)),
    deleteMessage: (message) => dispatch(deleteMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(Chatbar)
