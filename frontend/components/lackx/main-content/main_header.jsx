import React, {useState} from 'react'
import ChannelDescriptionContainer from '../../modals/channel_description_container'
export default function MainHeader(props) {
    const [open, setOpen] = useState(false)
    if(!props.type) return null
    if(!props.channel && !props.description) return null
    console.log(props)
    return (
        <>
            {props.type == "channel" 
                ?
            <div>
                <div className="content-header">
                    <div className="header-title" onClick={() => setOpen(true)}>
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
