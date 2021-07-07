import React from 'react'

export default function Overlay(props) {
    // const styles = {
    //     cursor: `url(${window.cursor}), auto`
    // }
    return (
        <div className="overlay" style={{ cursor: `url(${window.cursor}), auto`}} onClick={props.onClose}></div>
    )
}
