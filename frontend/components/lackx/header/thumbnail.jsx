import React from 'react'

export default function Thumbnail(props) {
    
    return (
        <>
            <div style={props.bg} className={props.type}>{props.content}</div>
        </>
    )
}
