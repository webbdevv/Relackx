import React from 'react'

export default function OptionDetail(props) {
    if(!props.open) return null
    return (
        <>
        <div className="option-detail">
            {props.msg}
            <div className={`point ${props.class}`}></div>
        </div>
        </>
    )
}
