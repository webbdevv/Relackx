import React, {useState, useEffect} from 'react'
import ChannelDescriptionModalContainer from '../../modals/channel_description_container'
export default function ContextMenu(props) {
    const [id, setId] = useState(null)
    useEffect(() => {
        if(!props.open) return
        setId(document.querySelector('.context-menu-sidebar').getAttribute('channelid'))
    }, [props.open])
    const [open, setOpen] = useState(false)
    function leaveChannel(id){
        let s = findSubscription(Number(id))
        props.deleteSubscription(s.id)
    }

    function findSubscription(id){
        return props.subscriptions.find(s => s.subscribable_id === id && s.subscribable_type === "Channel" && s.subscriber_id === props.currentUser)
    }
    (props)
    function setClipboard(text){
        var type = "text/plain";
        var blob = new Blob([text], { type });
        var data = [new ClipboardItem({ [type]: blob })];

        navigator.clipboard.write(data).then((copy => (copy), err => (err)))
    }
    function copyLink(event) {
        event.preventDefault();
        navigator.clipboard.writeText(document.querySelector('.context-menu-sidebar').getAttribute('channelref')).then((link) => {
            (link)
        }, (err) => {
            (err)
        });
    }
    return (
        <>
            <div style={props.style} className="context-menu-sidebar">
                <div onClick={() => setClipboard(document.querySelector('.context-menu-sidebar').getAttribute('channelname'))} className="menu-option"><span>Copy channel name</span></div>
                <div onClick={(e) => copyLink(e)} className="menu-option"><span>Copy channel link</span></div>
                <div className="separator"></div>
                <div onClick={() => setOpen(true)} className="menu-option"><span>See channel details</span></div>
                <div onClick={() => leaveChannel(id)} className="menu-option leave-channel"><span>Leave Channel</span></div>
            </div>
            <ChannelDescriptionModalContainer channel_id={id} open={open} onClose={() => setOpen(false)}/>
        </>
    )
}
