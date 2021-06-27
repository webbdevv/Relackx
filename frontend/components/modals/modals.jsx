import React from 'react'
import ReactDOM from 'react-dom'
import SignUpForm from '../sign_up/sign_up_form'

class Modal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            fn: '',
            ln: '',
            age: '',
            username: '',
            password: ''
        }
    }

    render(){
        if(!this.props.open) return null
        return ReactDOM.createPortal(
            <>
            <div className="overlay" onClick={this.props.onClose}></div>
            <div className="modal">

                <h4>Hey, welcome to Lackx. Sign up with us here!    <button className="form-exit" onClick={this.props.onClose}>&times;</button></h4>
                <SignUpForm/>
                
            </div>
            </>
        , document.getElementById('portal'))
    }
}

export default Modal
