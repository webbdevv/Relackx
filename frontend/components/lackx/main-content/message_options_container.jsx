import React from 'react'
import { connect } from 'react-redux'
import MessageOptions from './message_options'
import { createMessage, updateMessage, deleteMessage } from '../../../actions/message_actions'

const mapDispatchToProps = dispatch => ({
    updateMessage: (message) => dispatch(updateMessage(message)),
    deleteMessage: (messageId) => dispatch(deleteMessage(messageId))
})

export default connect(null, mapDispatchToProps)(MessageOptions)
