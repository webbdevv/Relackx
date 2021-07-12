import React from 'react'

//OPTIONS
//Style for background
//Content for text
//Classname passed down by parent type property currently, channel, header
export default function Thumbnail(props) {
    
    return (
        <>
            <div style={props.bg} className={props.type}>{props.content}</div>
        </>
    )
}
