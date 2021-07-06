import React from 'react'
import { useState } from 'react'
import Message from './message'

export default function Chatbar(props) {
    const [text, setText] = useState("")
    const btnStyle = {
        backgroundImage: `url(${window.send})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className="chatbar-container">
            <div className="wrapper">
                <input className="chatbar" value={text} type="text" placeholder="Message this channel..." onChange={(e) => setText(e.target.value)}/><button style={btnStyle}id="send"></button>
            </div>
        </div>
    )
}
