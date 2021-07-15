import React, { Component } from 'react'
import useOnScreen from '../../util/observer'
import { useRef } from 'react'

export default function LackxFeatures() {
    const ref = useRef()
    const visible = useOnScreen(ref)

    function changeNav(){
        const nav = document.querySelector(".nav")
        nav.classList.add('scrolled-1')
    }
    function revertNav(){
        const nav = document.querySelector(".nav")
        if(nav){
            nav.classList.remove('scrolled-1')
        }
    }
    function reveal(){
        const bonus = document.querySelectorAll('.span-hidden')
        bonus.forEach(el => el.classList.add('active'))
    }
    function hide(){
        const bonus = document.querySelectorAll('.span-hidden')
        bonus.forEach(el => el.classList.remove('active'))
    }

    return (
        <>
            <div ref={ref}>
                <section>
                    <div className="feature-container">
                        <div className="feature">
                            <h3 className="feature-title">Lackx has all of the features you'll need</h3>
                            <p className="feature-description">
                                Send messages to everyone and anyone instantly with websockets, and find any message with infinite scrolling
                                <svg onMouseEnter={reveal} onMouseLeave={hide} className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"/></svg>
                            </p>
                            <p className="in-depth">
                                Hover over the message icon to see planned bonus features! <br />
                                <span className="span-hidden">Bonus: drag and drop images and other media</span>
                            </p>
                        </div>

                        <div className="image">
                            {(visible ? changeNav() : revertNav())}
                            <img className="messaging-showcase" src={window.messaging} alt="Messaging image" />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="feature-container">
                        <div className="feature">
                            <h3 className="feature-title">Organize projects with channels</h3>
                            <p className="feature-description">
                                Users can create, join, update, and customize channels when they are logged in
                                <svg onMouseEnter={reveal} onMouseLeave={hide} className="icon" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 100 100" viewBox="0 0 100 100"><path d="M86.3,66.8C88.5,65,90,62.1,90,59c0-5.5-4.5-10-10-10s-10,4.5-10,10c0,3.1,1.5,6,3.7,7.8c-3.2,2-5.4,5.3-5.7,9.3L52,64V51h8	c1.1,0,2-0.9,2-2V35c0-4.3-2.3-8.1-5.7-10.2C58.5,23,60,20.1,60,17c0-5.5-4.5-10-10-10s-10,4.5-10,10c0,3.1,1.5,6,3.7,7.8	C40.3,26.9,38,30.7,38,35v14c0,1.1,0.9,2,2,2h8v13L32,76c-0.3-3.9-2.5-7.3-5.7-9.3C28.5,65,30,62.1,30,59c0-5.5-4.5-10-10-10	s-10,4.5-10,10c0,3.1,1.5,6,3.7,7.8C10.3,68.9,8,72.7,8,77v14c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V81l18-13.5L68,81v10	c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V77C92,72.7,89.7,68.9,86.3,66.8z M20,53c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S16.7,53,20,53z	 M28,89H12V77c0-4.4,3.6-8,8-8s8,3.6,8,8V89z M50,11c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S46.7,11,50,11z M42,47V35	c0-4.4,3.6-8,8-8s8,3.6,8,8v12H42z M80,53c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S76.7,53,80,53z M88,89H72V77c0-4.4,3.6-8,8-8	s8,3.6,8,8V89z"/></svg>
                            </p>
                            <p className="in-depth" onMouseEnter={reveal} onMouseLeave={hide}>
                                <span className="span-hidden">Bonus: organize further by making customizable workspaces</span>
                            </p>
                        </div>

                        <div className="image">
                            <img className="messaging-showcase" src={window.office} alt="Messaging image" />
                        </div>
                    </div>
                </section>


                <section>
                    <div className="feature-container">
                        <div className="feature">
                            <h3 className="feature-title">Create and customize accounts</h3>
                            <p className="feature-description">
                                Users can create accounts that will only show the channels and workspaces they are a part of
                                <svg onMouseEnter={reveal} onMouseLeave={hide} className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,10.5H20v-1a1,1,0,0,0-2,0v1H17a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,0-2Zm-7.7,1.72A4.92,4.92,0,0,0,15,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,2,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,13.3,12.22ZM10,11.5a3,3,0,1,1,3-3A3,3,0,0,1,10,11.5Z"/></svg>
                            </p>
                            <p className="in-depth" onMouseEnter={reveal} onMouseLeave={hide}>
                                <span className="span-hidden">Bonus: allow users to add friends and see others' profiles. Also, scroll down at the bottom of this page to see information about the app</span>
                            </p>
                        </div>

                        <div className="image">
                            <img className="messaging-showcase" src={window.user} alt="Messaging image" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
