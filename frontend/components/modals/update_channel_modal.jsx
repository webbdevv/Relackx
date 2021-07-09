import React, {useState} from 'react'
import Overlay from './overlay'
import ReactDOM from 'react-dom'
export default function UpdateChannelModal(props) {
    if(!props.open) return null
    const [name, setName] = useState(props.channel.name)
    const [description, setDescription] = useState(props.channel.description)
    function updateChannel(e){
        if(props.formType == "Name"){
            setName(e.target.value)
        } else if (props.formType == "Description"){
            setDescription(e.target.value)
        }
    }

    function handleUpdate(e){
        
        let channel = props.channel 
        channel.name = name
        channel.description = description
        props.updateChannel(channel).then(ch => 
            props.onClose()        
        )
    }

    let placeholder = (props.formType === "Name" ? "Enter new name here" : "Add a new description")
    return ReactDOM.createPortal(
        <>
        <Overlay onClose={props.onClose}/>
        <div className="modal update-channel-modal">
            <div className="header">
                <label htmlFor="">Edit {props.formType}</label>
                <span className="x-out" onClick={() => props.onClose()}>×</span>
            </div>
            <div className="body">
                <div className="flex-center">
                    <textarea onChange={updateChannel} placeholder={placeholder} className="textarea" cols="30" rows="5"></textarea>
                    <p className="text-muted">Let people know what this channel is about. The channel name will be visible in the header</p>
                </div>

                <div className="field">
                    <button onClick={props.onClose} className="update-channel-btn">Cancel</button>
                    <button onClick={handleUpdate} className="update-channel-btn">Save</button>
                </div>
            </div>
        </div>
        </>, document.getElementById('portal')
    )
}
