import React, {useState, useEffect} from 'react'
import Overlay from './overlay'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router-dom'
function CreateChannelModal(props) {
    if(!props.open) return null
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [is_private, setPrivate] = useState(false);
    const [valid, setValid] = useState(false);

    const btn = document.querySelector('create-channel')
    useEffect(() => {
        checkValid()
    }, [name])

    function handleSubmit(e){
        e.preventDefault()
    }

    function checkValid(e){
        const btn = document.querySelector('.create-channel')
        if(!btn) return
        // setName(e.target.value)
        if (!props.channels.includes(name) && name != "") {
            btn.classList.add('active')
            setValid(true)
        } else {
            if(btn){
                btn.classList.remove('active')
                setValid(false)
            }
        }
        //checkEmpty(e)
    }

    function checkEmpty(e){
        if (e.keyCode === 8 && name == "") {
            const btn = document.querySelector('.create-channel')
            btn.classList.remove('active')
            setValid(false)
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        let box = document.getElementById('checkbox')
        let state = {
            name: name,
            description: description,
            is_private: box.checked,
            dm_flag: false,
            workspace_id: props.workspaceId,
            owner_id: props.currentUser
        }
        debugger
        props.createChannel(state).then((ch) => {
            props.onClose()
            props.history.push('channel-browser')
        })
    }

    return ReactDOM.createPortal(
        <>
            <Overlay onClose={props.onClose}/>
            <div className="modal create-channel-modal">
                <p className="create-channel-header">Create a Channel</p>
                <p className="create-channel-description">Channels are where your team communicates. They’re best when organized around a topic — #chum-farmers, for example.</p>
                <div className="form-field">
                    <label htmlFor="">Name {!valid && name != "" ? <span className="channel-errors">Channel name must be unique</span> : ""}</label>
                    <input onChange={(e) => setName(e.target.value)} className="pound" type="text" placeholder="farmers-of-the-chum"/>
                </div>

                <div className="form-field">
                    <label htmlFor="">Description</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} placeholder="make the chum oh make, make, make the chum oh!"/>
                </div>

                <div className="form-field slide-field">
                    <p className="slider-header">Make private</p>
                    <p className="slider-description">When a channel is set to private, it can only be viewed or joined by invitation.</p>
                    <label className="switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox"/>
                        <div className="slider round"></div>
                    </label>
                </div>
                <button className="create-channel" onClick={handleSubmit}>Create</button>
            </div>
        </>
    , document.getElementById('portal'))
}

export default withRouter(CreateChannelModal)