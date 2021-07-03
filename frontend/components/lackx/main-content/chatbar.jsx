import React from 'react'
import { useState } from 'react'
export default function Chatbar() {
    const [text, setText] = useState("")
    return (
        <div className="chatbar-container">
            <div className="wrapper">
                <input className="chatbar" type="text" placeholder="Message this channel..." onChange={(e) => setText(e.target.value)}/>
            </div>
        </div>
    )
}
