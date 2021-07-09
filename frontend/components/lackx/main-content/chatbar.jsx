import React, { useState, useRef, useEffect } from 'react'


export default function Chatbar(props) {
    const [text, setText] = useState("")
    const [hasFocus, setFocus] = useState(false)

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
        if(text.length > 0){
            document.querySelector('.send-msg')
        }
    },[text])
    return (
        <>
            <div className="cover">
                <div className="chatbar-container">
                    <input ref={inputRef} onChange={handleInputChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className="chatbar" value={text} type="text" placeholder="Send a message to this channel" onChange={(e) => setText(e.target.value)}/>
                    <div className="chat-options">
                        <div className="options">
                            {/* <svg className="icon option option-italic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="151.994" x2="103.994" y1="55.995" y2="199.995" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="63.994" x2="143.994" y1="199.995" y2="199.995" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="111.994" x2="191.994" y1="55.995" y2="55.995" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                            <svg className="icon option option-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" d="M64,120h88a40,40,0,0,1,0,80l-88.00586-.00488v-152L140,48a36,36,0,0,1,0,72"/></svg> */}
                        </div>
                        <svg className="send-msg icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill="#bbbfc1" d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"/></svg>
                    </div>
                </div>
            </div>
            <div ref={outputRef}></div>
        </>
    )
}
