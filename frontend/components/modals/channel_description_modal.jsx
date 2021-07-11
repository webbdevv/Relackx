import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Overlay from './overlay'
import { mapDateToString } from '../../util/misc_util'
import UpdateChannelModal from '../modals/update_channel_modal'
import ConfirmationModal from './confirmation_modal'

export default function ChannelDescriptionModal(props) {
    if(!props.open) return null
    if(!props.channel) return null

    let date = props.channel ? props.users[props.channel.owner_id].first_name + " " + props.users[props.channel.owner_id].last_name + " on " + mapDateToString(props.channel.created_at) : ""
    const [isUpdateOpen, setUpdateOpen] = useState(false)
    const [isConfirmationOpen, setConfirmationOpen] = useState(false)
    const [formType, setFormType] = useState('')
    const [actionType, setActionType] = useState('')
    const [prompt, setPrompt] = useState('')
    const [action, setAction] = useState(null)
    const [header, setHeader] = useState('')
    // useEffect(() => {
    //     openUpdate()
    // }, [formType])
    function deleteChannel(id){
        props.deleteChannel(id)
        props.onClose()
    }
    function leaveChannel(id){
        props.deleteSubscription(id)
        props.onClose()
    }
    const xStyles = {
        marginRight: '5%'
    }
    return ReactDOM.createPortal(
        <>
            <Overlay onClose={props.onClose}/>
            <div className="modal channel-description-modal">
                <div className="description-header">
                    <div className="header-container">
                        <div className="header-text">{props.channel ? props.channel.name : "Channel Name"}</div>
                        <span className="x-out" style={xStyles} onClick={props.onClose}>×</span>
                    </div>
                    <p className="subtext">Here you can find all of your channel details. If you are the owner, you can make changes to relevant fields as well</p>
                </div>

                <div className="description-container">
                    <div className="description-body">
                        <div className="description-container">
                            <div className="topic" onClick={() => {
                                setFormType('Name');
                                setUpdateOpen(true)
                            }}>
                                <p className="header">{props.channel ? props.channel.name : "Channel Name"}</p>
                                <p className="subtext">Edit your channel name here!</p>
                            </div>
                            <div className="description" onClick={() => {
                                setFormType('Description')
                                setUpdateOpen(true)
                            }}>
                                <p className="header">Description</p>
                                <p className="subtext">{props.channel ? (props.channel.description ? props.channel.description.slice(0, 110) : "Add a description like: this channel is for working on making something really really cool") : "Description"}</p>
                            </div>
                            <div className="created-by">
                                <p className="header">Created by</p>
                                <p className="subtext">{date ? date : "Kyle Zew on Hump"}</p>
                            </div>
                            <div className="leave-channel">
                                <p onClick={() => {
                                    setAction(() => leaveChannel.bind(null, props.channel.id))
                                    setActionType(`Leave Channel`)
                                    setHeader(`Leave ${props.channel.name}`)
                                    setPrompt("Channel members won't be notified that you've left. You can rejoin anytime")
                                    setConfirmationOpen(true)
                                }} className="header">Leave Channel</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-center">
                        <div className="delete-channel" onClick={
                            () => {
                                setAction(() => deleteChannel.bind(null, props.channel.id))
                                setPrompt("Do you really want to delete this channel? If you delete it all messages and data inside will be lost forever.")
                                setHeader(`Delete ${props.channel.name}`)
                                setActionType(`Delete Channel`)
                                setConfirmationOpen(true)
                            }}>
                            <p className="header">Delete Channel</p>
                            <p className="subtext">Careful! You can delete this channel by clicking this if you are the channel owner.</p>
                        </div>
                    </div>
                </div>
            </div>
            <UpdateChannelModal updateChannel={props.updateChannel} channel={props.channel} formType={formType} open={isUpdateOpen} onClose={() => setUpdateOpen(false)}/>
            <ConfirmationModal headerMsg={header} action={action} prompt={prompt} actionType={actionType} channel={props.channel} open={isConfirmationOpen} onClose={() => setConfirmationOpen(false)}/>
        </>
    , document.getElementById('portal'))
}
