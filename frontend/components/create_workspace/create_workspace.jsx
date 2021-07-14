import React, {useState} from 'react'
import { connect } from 'react-redux'
import CompositionHeader from './composition_header'
import CompositionSidebar from './composition_sidebar'
import WorkspaceComposer from './workspace_composer'
export const CreateWorkspace = (props) => {
    const [name, setName] = useState('')
    return (
        <div className="app-container">
            <CompositionHeader name={"Hello"} currentUser={props.currentUser}/>
            <CompositionSidebar/>
            <WorkspaceComposer/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => {
    
}

export default connect(mapStateToProps, null)(CreateWorkspace)
