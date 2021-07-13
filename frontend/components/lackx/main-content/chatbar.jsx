import React, { useState, useEffect } from 'react'


export default function Chatbar(props) {
    const [hasFocus, setFocus] = useState(false)
    const [fill, setFill] = useState("#bbbfc1")

    useEffect(() => {
        let el = document.querySelector('.chat-options')
        if(!el) return
        if(hasFocus){
            el.classList.add('focus')
        } else {
            el.classList.remove('focus')
        }
    }, [hasFocus])

    useEffect(() => {
        if(props.text.length > 0){
            setFill("#FFF")
            document.querySelector('.send-msg').classList.add('active')
        } else {
            setFill("#bbbfc1")
            document.querySelector('.send-msg').classList.remove('active')
        }
    },[props.text])

    function handleSubmit(e){
        if(props.text.length <= 0) return;
        e.preventDefault()
        props.createMessage({
            author_id: props.currentUserId,
            channel_id: props.channel.id,
            body: props.text
        }).then(msg => {
            props.setText('')
            props.scrollToBottom()
        })
    }
    
    function handleDMCreation(e){
        if(!props.channel){
            props.createChannel({
                name: `dm/${props.currentUser}/${props.user.id}`,
                owner_id: props.currentUser,
                is_private: true,
                dm_flag: true,
                workspace_id: props.workspaceId,
                
            }).then(ch => {
                props.createSubscription({
                    
                })
                debugger
            })
        }
    }
    function enterSubmit(e){
        if(e.keyCode === 13){
            handleSubmit(e)
        }
    }

    return (
        <>
            <div className="cover">
                <div className="chatbar-container">
                    <input onKeyDown={enterSubmit} value={props.text} onChange={(e) => props.setText(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className="chatbar" type="text" placeholder={ props.channel ? `Send a message to #${props.channel.name}` : "Send a message to this channel"}/>
                    <div className="chat-options">
                        <div className="options">
                            {/* <svg className="icon option option-italic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="151.994" x2="103.994" y1="55.995" y2="199.995" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="63.994" x2="143.994" y1="199.995" y2="199.995" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="111.994" x2="191.994" y1="55.995" y2="55.995" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                            <svg className="icon option option-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" d="M64,120h88a40,40,0,0,1,0,80l-88.00586-.00488v-152L140,48a36,36,0,0,1,0,72"/></svg> */}
                        </div>
                        <div onClick={handleSubmit}><svg className="icon send-msg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill={fill} d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"/></svg></div>
                    </div>
                </div>
            </div>
        </>
    )
}