import React from 'react'
import { useState } from 'react'
export default function LogInForm(props){
    const [em, setEm] = useState("")
    const [pass, setPass] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        props.login({
            email: em,
            password: pass
        }).then(user => {
            props.history.push('/workspaces')
        })
    }

    return (
        
        <form className="form form-sm">
            <div className="page">
                <p className="form-header">Log In with Us</p>
                <p className="errors">{props.errors}</p>
                <div className="field">
                    <label htmlFor="fn">Email</label>
                    <input onChange={(e) => setEm(e.target.value)} value={em} type="text" id="fn" placeholder="something@something.com"/>
                </div>

                <div className="field">
                    <label htmlFor="ln">Password</label>
                    <input onChange={(e) => setPass(e.target.value)} value={pass} type="password" id="ln" placeholder="password"/>
                </div>

                <div className="field">
                    <button className="next fst-btn" onClick={handleSubmit}>Log In</button>
                </div>

                <div className="field">
                    <div onClick={props.changeView} className="change-view">
                        <span>New to Slack?</span>
                        <span>Create an account</span>
                    </div>
                </div>
            </div>
        </form>
    )
}
