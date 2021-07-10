import React from 'react'
import { connect } from 'react-redux'
import EditMessage from './edit_msg'
import { updateMessage, deleteMessage } from '../../../../actions/message_actions'
const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    updateMessage: (message) => dispatch(updateMessage(message)),
    deleteMessage: (messageId) => dispatch(deleteMessage(messageId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditMessage)
