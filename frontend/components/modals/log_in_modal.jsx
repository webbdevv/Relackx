import React from 'react'
import ReactDOM from 'react-dom'
import Overlay from './overlay'
import LogInForm from '../sign_up/log_in_form'
export default class LogInModal extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        if(!this.props.open) return null
        return ReactDOM.createPortal(
            <>
            <Overlay onClose={this.props.onClose}/>
            <div className="modal">
                <div className="form-exit" onClick={this.props.onClose}>&times;</div>
                <h4 className="modal-form-header">Sign In</h4>
                <LogInForm/>
            </div>
            </>
        , document.getElementById('portal'))
    }
}