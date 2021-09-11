import React, { useState, useEffect } from 'react'
import SignUpModal from '../modals/sign_up_modal';
import LogInModal from '../modals/log_in_modal'
import Navbar from '../navbar/navbar';
import LackxFeatures from './lackx_features';
import Footer from './footer';
export default function Splash(props){
    const [isOpen, setIsOpen] = useState(false)
    const [signIn, setSignIn] = useState(false)
    
    function closeSignIn(){
        setSignIn(false)
        props.clearSessionErrors()
    }

    function closeSignUp(){
        setIsOpen(false)
        props.clearSessionErrors()
    }

    // let sectionStyle = {
    //     backgroundImage: `url(${window.background})`,
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat'
    // }
        return (
        <>
        <div className="scroll-container">
                <Navbar setSignIn={setSignIn}/>
                <div className="container">
                <section className="section-0">
                    <div className="landing">
                        <div className="featured">
                            <div className="featured-text">
                                <h1>
                                    Lackx is where the future works
                                </h1>
                                <p>
                                    Transform the way you work with one place for everyone and everything you need to get stuff done.
                                </p>
                                <button className="sign-in" onClick={() => props.demoUser({email: "lfleckness0@dagondesign.com", password: "GWvFFp"})}>Demo User</button>
                                <button onClick={() => setIsOpen(true)} className="get-started">Get Started</button>
                            </div>
                            <div className="featured-image">
                                <img src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/hero/img-campaign-hero.jpg" alt="slack image" />
                            </div>
                        </div>
                        <div className="spacing-med"></div>
                        <div className="featured">
                            <div className="featured-image">
                                <a href="https://www.youtube.com/embed/ZDs056YM4fc" target="_blank">
                                    <img src="https://a.slack-edge.com/b7cc858/marketing/img/homepage/self-serve-campaign/inline-images/video-thumbnail.jpg" alt="" data-src="https://a.slack-edge.com/b7cc858/marketing/img/homepage/self-serve-campaign/inline-images/video-thumbnail.jpg"/>
                                </a>
                            </div>
                            <div className="featured-text mini-heading">
                                <h2>
                                    Now is your moment to build a better tomorrow
                                </h2>
                                <p>
                                    We've seen what the future can be. Now it's time to decide what it will be.
                                </p>
                                <a href="https://www.youtube.com/embed/ZDs056YM4fc" target="_blank">
                                    <button className="btn-outlined">Watch Video</button>
                                </a> 
                            </div>
                        </div>
                    </div>
                </section>
                <LackxFeatures/>
                <Footer/>
                <SignUpModal changeView = {() => closeSignUp() || setSignIn(true)} onClose={closeSignUp} open={isOpen}></SignUpModal>
                <LogInModal changeView = {() => closeSignIn() || setIsOpen(true)} onClose={closeSignIn} open={signIn}/>
            </div>
        </div>
        </>
    )
}
