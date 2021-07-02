import React from 'react'
import ReactDOM from 'react-dom'
import SignUpForm from '../sign_up/sign_up_form'
import Overlay from './overlay'
import SignUpFormContainer from '../sign_up/sign_up_container'

function SignUpModal(props){
    if(!props.open) return null
    return ReactDOM.createPortal(
        <>
        <Overlay onClose={props.onClose}/>
        <div className="modal">
            <div className="form-exit" onClick={props.onClose}>&times;</div>
            <h4 className="modal-form-header">Sign up</h4>
            <SignUpFormContainer/>
        </div>
        </>
    , document.getElementById('portal'))
}

export default SignUpModal
