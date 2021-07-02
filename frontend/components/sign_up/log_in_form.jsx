import React from 'react'
import { useState } from 'react'
export default function LogInForm(props){
    const [em, setEm] = useState("")
    const [pass, setPass] = useState("")

    function handleSubmit(){
        let user = props.login({
            email: em,
            password: pass
        })
        props.history.push('/app')
    }

    return (
        
        <form className="form form-sm">
            <div className="page">
                <p className="form-header">Log In with Us</p>
                <div className="field">
                    <label htmlFor="fn">Email</label>
                    <input onChange={(e) => setEm(e.target.value)} type="text" id="fn" placeholder="Chase"/>
                </div>

                <div className="field">
                    <label htmlFor="ln">Password</label>
                    <input onChange={(e) => setPass(e.target.value)} type="password" id="ln" placeholder="Liu"/>
                </div>

                <div className="field">
                    <button className="next fst-btn" onClick={handleSubmit}>Log In</button>
                </div>
            </div>
        </form>
    )
}
