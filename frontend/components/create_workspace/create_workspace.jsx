import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import CompositionHeader from './composition_header'
import CompositionSidebar from './composition_sidebar'
import WorkspaceComposer from './workspace_composer'
import { createWorkspace, updateWorkspace } from '../../actions/workspace_actions'
import { createChannel } from '../../actions/channel_actions'
import { createSubscription } from '../../actions/subscription_actions'


export const CreateWorkspace = (props) => {
    const [name, setName] = useState('')
    const [page, setPage] = useState(1)
    const [channel, setChannel] = useState('')
    const [allowed, setAllowed] = useState(20)
    function movePageForward(){
        setPage(page + 1)
        let input = document.getElementById('create-workspace').value = ''
        document.querySelector('.nxt-btn').classList.remove('active')
    }

    function completeForm(){
        props.createWorkspace({
            owner_id: props.currentUser.id,
            name: name,
        }).then(payload => {
            let newChannel = {
                name: channel,
                owner_id: props.currentUser.id,
                dm_flag: false,
                workspace_id: payload.workspace.id,
                description: "Add a description for this channel"
            }

            props.createSubscription({
                subscribable_type: "Workspace",
                subscribable_id: payload.workspace.id,
                subscriber_id: props.currentUser.id
            })

            props.createChannel(newChannel).then(ch => {
                props.createSubscription({
                    subscribable_type: "Channel",
                    subscribable_id: ch.channel.id,
                    subscriber_id: props.currentUser.id
                }).then(() => {
                    payload.workspace.general_channel = ch.channel.id
                    debugger
                    props.updateWorkspace(payload.workspace).then(() => {
                        props.history.push(`/app/${payload.workspace.id}/${ch.channel.id}`)
                    })
                })
            })

        })
    }

    useEffect(() => {
        setAllowed(20 - name.length)
        const btn = document.querySelector('.nxt-btn')
        if(name.length > 0 && !btn.classList.contains('active')){
            btn.classList.add('active')
        } else if(name.length === 0){
            if(btn){
                btn.classList.remove('active')
            }
        }
    }, [name])

    useEffect(() => {
        setAllowed(20 - channel.length)
        const btn = document.querySelector('.nxt-btn')
        if(channel.length > 0 && !btn.classList.contains('active')){
            btn.classList.add('active')
        } else if(channel.length === 0){
            if(btn){
                btn.classList.remove('active')
            }
        }
    }, [channel])

    return (
        <div className="app-container">
            <CompositionHeader name={name} currentUser={props.currentUser}/>
            <CompositionSidebar name={name}/>
            <WorkspaceComposer channel={channel} allowed={allowed}
                completeForm={completeForm} movePageForward={movePageForward} setChannel={setChannel} page={page} name={name} setName={setName}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    createWorkspace: (workspace) => dispatch(createWorkspace(workspace)),
    createChannel: (channel) => dispatch(createChannel(channel)),
    createSubscription: (sub) => dispatch(createSubscription(sub)),
    updateWorkspace: (workspace) => dispatch(updateWorkspace(workspace))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkspace)
