import React, {useState} from 'react'
import { createTimestamp, compareTime, dateChange, giveDate } from '../../../util/misc_util'
import Thumbnail from '../header/thumbnail'
import MessageOptionsContainer from './message_options_container'
import EditMessageContainer from './edit/edit_msg_container'
import MessageDivider from './message_divider'

export default function Message(props) {
    const [hovered, setHover] = useState(false);
    const [edit, setEdit] = useState(false);
    const [hide, setHidden] = useState(false);
    if(!props || !props.user) return null
    let bg = {
        backgroundColor: props.user ? props.user.fav_color : ""
    }
    let timestamp = createTimestamp(props.msg.created_at)
    return (
        <>
            {props.prevAuthorId && props.prevAuthorId === props.user.id && compareTime(props.msg.created_at, props.prevCreatedAt, "15") ? 
            <>
                <li id={`msg-${props.msg.id}`} className="hover-msg message reply" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <div className="msg-body">
                        {props.children}
                        <MessageOptionsContainer noHover={() => setHover(false)} setHidden={setHidden} isAuthor={props.msg.author_id === props.currentUser} msg = {props.msg} setEdit={setEdit} setText={props.setText} text={props.text} msg={props.msg} hovered={hovered} type="body" />
                    </div>
                    {edit ? <EditMessageContainer noHover={() => setHover(false)} setEdit={setEdit} setHidden={setHidden} msg={props.msg} text={props.msg.body}/> : null}
                </li>
                {dateChange(props.msg.created_at, props.prevCreatedAt) ? <MessageDivider date={giveDate(props.msg.created_at)}/> : null}
            </>
            : 
            <>
                <li id={`msg-${props.msg.id}`} className="message hover-msg" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <Thumbnail type="thumbnail-msg" bg={bg} content={props.user.first_name.slice(0, 1)}/>
                    <div className="body">
                        <p className="msg-header">{props.user.first_name + " " + props.user.last_name} <span className="timestamp">{timestamp}</span></p>
                        <p className="msg-body">{props.children}</p>
                        <MessageOptionsContainer noHover={() => setHover(false)} setHidden={setHidden} isAuthor={props.msg.author_id === props.currentUser} msg = {props.msg} setHidden={setHidden} remove={hide} setEdit={setEdit} setText={props.setText} text={props.text} msg={props.msg} hovered={hovered} />
                    </div>
                    {edit ? <EditMessageContainer noHover={() => setHover(false)} setEdit={setEdit} setHidden={setHidden} msg={props.msg} text={props.msg.body}/> : null}
                </li>
                {dateChange(props.msg.created_at, props.prevCreatedAt) ? <MessageDivider date={giveDate(props.msg.created_at)}/> : null}
            </>
            }
        </>
    )
}
