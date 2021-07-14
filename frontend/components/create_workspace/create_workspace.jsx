import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import CompositionHeader from './composition_header'
import CompositionSidebar from './composition_sidebar'
import WorkspaceComposer from './workspace_composer'


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

const mapDispatchToProps = dispatch => {
    
}

export default connect(mapStateToProps, null)(CreateWorkspace)
