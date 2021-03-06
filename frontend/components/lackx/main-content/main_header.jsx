import React, {useState} from 'react'
import ChannelDescriptionContainer from '../../modals/channel_description_container'
import Thumbnail from '../header/thumbnail'
export default function MainHeader(props) {
    const [open, setOpen] = useState(false)
    if(!props.type) return null
    return (
        <>
            {props.type == "channel" && props.channel
                ?
            <div>
                <div className="content-header">
                    <div className={`header-title ${props.type}`} onClick={() => setOpen(true)}>
                        {props.children}<span className="caret-down">^</span> 
                    </div>
                    <div className="header-description">
                        {props.description.slice(0, 100)}
                    </div>
                </div>
                <ChannelDescriptionContainer channel_id={props.channel.id} open={open} onClose={() => setOpen(false)}/>
            </div>
                 : 
            <div className="content-header">
                {props.user ? <Thumbnail type={props.thumbType} bg={props.thumbBg} content={props.user.first_name.slice(0, 1)}/> : null}
                <div className="header-title">
                    {props.children}
                </div>
                <div className="header-description">
                    {props.description ? props.description.slice(0, 100) : ""}
                </div>
            </div>
            }
        </>
    )
}
