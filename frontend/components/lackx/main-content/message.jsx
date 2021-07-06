import React from 'react'
import Thumbnail from '../header/thumbnail'

export default function Message(props) {
    return (
        <li className="message">
            <Thumbnail type="thumbnail-msg"/>
            <div className="body">
                <p className="msg-header">{props.author}</p>
                <p className="msg-body">{props.children}</p>
            </div>
        </li>
    )
}
