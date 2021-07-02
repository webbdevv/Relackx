import React from 'react'
import Thumbnail from '../header/thumbnail'

export default function Message(props) {
    return (
        <li className="message">
            <Thumbnail type="thumbnail-msg"/>
            <p className="msg-header">{props.author}</p><br />
            <p className="msg-body">{props.children}</p>
        </li>
    )
}
