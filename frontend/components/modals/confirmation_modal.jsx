import React from 'react'
import Overlay from './overlay'
import ReactDOM from 'react-dom'

export default function ConfirmationModal(props){
    if(!props.open) return null
    function handleSubmit(){
        props.onClose()
        props.action()
    }
    let xstyle = {
        marginBottom: '19px'
    }
    return ReactDOM.createPortal(
        <>
            <Overlay onClose={props.onClose} />
            <div className="modal confirmation">
                <div className="confirmation-container">
                    <div className="confirmation-header">
                        <p className="confirmation-header-text">
                        {props.actionType} <span className="channel-name">{props.channel.name}</span>
                        </p>
                        <span className="x-out" style= {xstyle} onClick={props.onClose}>×</span>
                    </div>
                    <div className="body">
                        <div className="prompt">
                            {props.prompt}
                        </div>
                    </div>
                    <div className="btn-container">
                            <button onClick={props.onClose} className="update-channel-btn cancel">Cancel</button>
                            <button onClick={handleSubmit} className="update-channel-btn accept">{props.actionType} Channel</button>
                    </div>
                </div>
            </div>
        </>, document.getElementById('portal'))
}
