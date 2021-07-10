import React, {useState, useEffect} from 'react'

export default function EditMessage(props) {
    const [text, setText] = useState(props.text)
    const [fill, setFill] = useState("#FFF")
    const [hasFocus, setFocus] = useState(false)
    function handleSubmit(){

    }
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
    return (
        <div className="cover edit">
            <div className="chatbar-container">
                <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} type="text" className="chatbar" value={text} onChange={(e) => setText(e.target.value)}/>
                <div className="chat-options">
                        <div className="options"></div>
                    <div onClick={handleSubmit}><svg className="icon send-msg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill={fill} d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"/></svg></div>
                </div>
            </div>
            <button className="cancel-btn">Cancel</button>
            <button className="save-changes">Save Changes</button>
        </div>
    )
}
