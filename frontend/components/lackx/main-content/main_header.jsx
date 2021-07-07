import React from 'react'

export default function MainHeader(props) {
    return (
        <div className="content-header">
            <div className="header-title">
                {props.children}
            </div>
            <div className="header-description">
                {props.description.slice(0, 100)}
            </div>
        </div>
    )
}
