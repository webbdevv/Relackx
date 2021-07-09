import React from 'react'
import { createTimestamp } from '../../../util/misc_util'
import Thumbnail from '../header/thumbnail'

export default function Message(props) {
    if(!props) return null
    let bg = {
        backgroundColor: props.user ? props.user.fav_color : ""
    }
    let timestamp = createTimestamp(props.msg.created_at)
    return (
        <>
        {props.prevAuthorId === props.user.id ? 
        <div className="hover-msg reply">
            <p className="msg-body">{props.children}</p>
        </div>
        : <li className="message hover-msg">
                <Thumbnail type="thumbnail-msg" bg={bg} content={props.user.first_name.slice(0, 1)}/>
                <div className="body">
                    <p className="msg-header">{props.user.first_name + " " + props.user.last_name} <span className="timestamp">{timestamp}</span></p>
                    <p className="msg-body" id={props.msgId}>{props.children}</p>
                </div>
            </li>}
        </>
    )
}
