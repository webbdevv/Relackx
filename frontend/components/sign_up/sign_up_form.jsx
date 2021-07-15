import React from 'react'
import { useState } from 'react'
export default function SignUpForm(props) {

    const [curPage, setPage] = useState(0)
    const [first_name, setFn] = useState("")
    const [last_name, setLn] = useState("")
    const [fav_color, setfavColor] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")

    function transition(e){
        e.preventDefault()
        const pages = document.querySelectorAll('.page')
        const slides = document.querySelectorAll('.slide-page')

        pages[curPage].classList.add('inactive')
        slides[curPage].classList.add('active')
        setPage(curPage + 1)
    }

    function reverse(e){
        e.preventDefault()
        const pages = document.querySelectorAll('.page')
        const slides = document.querySelectorAll('.slide-page')

        pages[curPage - 1].classList.remove('inactive')
        slides[curPage - 1].classList.remove('active')
        setPage(curPage - 1)
    }

    function submit(e){
        e.preventDefault()
        let user = {first_name, last_name, fav_color, email, password}
        
        props.signUp(user)
        .then(user => {
            props.history.push(`/workspaces`)
            return
        })
        renderErrors()
    }

    function renderErrors(){
        const pages = document.querySelectorAll('.page')
        const slides = document.querySelectorAll('.slide-page')
        pages.forEach(page => page.classList.remove('active', 'inactive'))
        slides.forEach(slide => slide.classList.remove('active', 'inactive'))
        setPage(0)
    }
    
    return (
        <form className="form">
            <div className="page">
                <p className="form-header">Name</p>
                <p className="errors">{props.errors}</p>
                <div className="field">
                    <label htmlFor="fn">First Name</label>
                    <input onChange={(e) => setFn(e.target.value)} value={first_name} type="text" id="fn" placeholder="Kyle"/>
                </div>

                <div className="field">
                    <label htmlFor="ln">Last Name</label>
                    <input onChange={(e) => setLn(e.target.value)} value={last_name} type="text" id="ln" placeholder="Xu"/>
                </div>

                <div className="field">
                    <button className="next fst-btn" onClick={transition}>Next</button>
                </div>

                <div className="field">
                    <div className="change-view">
                        <span>Already using Slack?</span>
                        <span onClick={props.changeView}>Sign in to an existing workspace</span>
                    </div>
                </div>
            </div>

            <div className="page slide-page">
                <p className="form-header">Credentials</p>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" id="email" placeholder="myname@gmail.com"/>
                </div>

                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setPass(e.target.value)} value={password} type="password" id="password" placeholder="password" />
                </div>

                <div className="field">
                    <button className="next fst-btn" onClick={submit}>Submit</button>
                    <button className="prev" onClick={reverse}>Back</button>
                </div>
            </div>
        </form>
    )
}