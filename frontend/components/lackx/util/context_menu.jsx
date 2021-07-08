import React, {useState, useEffect} from 'react'
import ChannelDescriptionModalContainer from '../../modals/channel_description_container'
export default function ContextMenu(props) {
    const [id, setId] = useState(null)
    useEffect(() => {
        setId(document.querySelector('.context-menu-sidebar').getAttribute('channelid'))
    })
    const [open, setOpen] = useState(false)
    function leaveChannel(e){
        props.deleteSubscription(id)
    }
    return (
        <>
            <div style={props.style} className="context-menu-sidebar">
                <ul className="menu-dropdown">
                    <li onClick={() => setOpen(true)} className="menu-option"><span>See channel details</span></li>
                    <li onClick={leaveChannel} className="menu-option leave-channel"><span>Leave Channel</span></li>
                </ul>
            </div>
            <ChannelDescriptionModalContainer channel_id={id} open={open} onClose={() => setOpen(false)}/>
        </>
    )
}
