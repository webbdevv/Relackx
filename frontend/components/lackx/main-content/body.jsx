import React from 'react'
import Message from './message'
export default function Body() {
    return (
        <div className="main-content-body">
            <ul className="message-container">
                <Message author="Kyle Xu">Message 1</Message>
                <Message author="Kyle Xu">Message 2</Message>
                <Message author="Kyle Xu">Message 3</Message>
                <Message author="Kyle Xu">Message 4</Message>
            </ul>
        </div>
    )
}
