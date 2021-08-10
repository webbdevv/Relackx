import React, {useState, useEffect} from 'react'
import ConfirmationModal from '../../../modals/confirmation_modal'

export default function EditMessage(props) {
    const [text, setText] = useState(props.text)
    const [fill, setFill] = useState("#FFF")
    const [hasFocus, setFocus] = useState(false)
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if(props.text.length > 0){
            setFill("#FFF")
            document.querySelector('.send-msg').classList.add('active')
        } else {
            setFill("#bbbfc1")
            document.querySelector('.send-msg').classList.remove('active')
        }
    },[props.text])

    useEffect(() => {
        let el = document.querySelector('.chat-options')
        if(!el) return
        if(hasFocus){
            el.classList.add('focus')
        } else {
            el.classList.remove('focus')
        }
    }, [hasFocus])

    function handleUpdate(e){
        e.preventDefault()
        let { author_id, channel_id, id } = props.msg
        let message = { body: text, author_id, channel_id, id}
        if(text.length === 0){
            setOpen(true)
            props.noHover();
        } else {
            props.updateMessage(message).then(msg => {
                cleanUp()
            })
        }
    }

    function deleteMsg(msgId){
        props.deleteMessage(msgId).then(msg => {
            console.log(msg);
        })
    }

    function cleanUp(){
        let originalMsg = document.getElementById(`msg-${props.msg.id}`)
        originalMsg.children[1].style.display = 'block'
        originalMsg.classList.remove('edit-bg')
        props.setEdit(false)
        props.setHidden(false)
    }

    function enterSubmit(e){
        if(e.keyCode === 13){
            handleUpdate(e)
        }
    }

    return (
        <div className="cover edit">
            <div className="chatbar-container">
                <input onKeyDown={enterSubmit} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} type="text" className="chatbar" value={text} onChange={(e) => setText(e.target.value)}/>
                <div className="chat-options">
                        <div className="options"></div>
                    <div onClick={enterSubmit}><svg className="icon send-msg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill={fill} d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"/></svg></div>
                </div>
            </div>
            <br />
            <div className="btns">
                <button onClick={cleanUp} className="cancel-btn">Cancel</button>
                <button onClick={handleUpdate} className="save-changes"><svg className="return-symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H7.41l1.3-1.29A1,1,0,0,0,7.29,9.29l-3,3a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L7.41,14H17a3,3,0,0,0,3-3V7A1,1,0,0,0,19,6Z"/></svg>Save Changes</button>
            </div>
            <ConfirmationModal type="msg" open={open} action={() => deleteMsg(props.msg.id)} actionType="Delete Message" headingMsg="" prompt="Do you really want to delete this message? It will be lost forever." onClose={() => setOpen(false)} id={props.msg.id}/>
        </div>
    )
}
