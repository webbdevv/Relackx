import React from 'react'

export default function WorkspaceComposer(props) {

    function show(){
        let span = document.querySelector('.remaining-chars')
        span.classList.toggle('active')
    }
    function hide(){
        let span = document.querySelector('.remaining-chars')
        span.classList.toggle('active')
    }

    return (
        <div className="workspace-composer">
            <div className="step">{props.page === 1 ? "Step 1 of 2" : "Step 2 of 2"}</div>
            <div>
                <div className="create-question">{props.page === 1 ? "What's the name of your team or company" : "What’s your team working on right now?"}</div>
                <div className="workspace-description">{props.page === 1 ? "This will be the name of your Slack workspace — choose something that your team will recognize." : "This could be anything: a project, campaign, event, or the deal you’re trying to close."} </div>
            </div>
            <div className="input">
                <input onFocus={show} onBlur={hide} id="create-workspace" placeholder={props.page === 1 ? "Ex. Google or something cool like that" : "Ex. Eating yums, finishing this enormous fullstack project"} 
                    type="text" onChange={props.page === 1 ? (e) => props.setName(e.target.value) : (e) => props.setChannel(e.target.value) }/>
                <span className="remaining-chars">{props.allowed}</span>
                <div 
                    value={props.page === 1 ? props.name : props.channel}
                    onClick={props.page === 1 ? props.movePageForward : props.completeForm} className="nxt-btn">Next</div>
            </div>
        </div>
    )
}
