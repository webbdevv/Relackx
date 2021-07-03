import React, { useState } from 'react'
import SignUpModal from '../modals/sign_up_modal';
import LogInModal from '../modals/log_in_modal'
import Navbar from '../navbar/navbar';
import LackxFeatures from './lackx_features';
import Footer from './footer';
export default function Landing(){
    
    
    const [isOpen, setIsOpen] = useState(false)

    const [signIn, setSignIn] = useState(false)
    let sectionStyle = {
        backgroundImage: `url(${window.background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
        return (
        <>
            <Navbar/>
            <div className="container">
                <section className="section-0" style={sectionStyle}>
                    <div className="landing">
                        <div className = "text-feature">
                            <h1 className = "seo-lackx">Lackx makes it <span className="colored-text-yellow">almost pleasant</span> to work with others</h1>
                        </div>

                        <div>
                            <button className="sign-in" onClick={() => setSignIn(true)}>Sign In</button>
                            <button onClick={() => setIsOpen(true)} className="get-started">Get Started</button>
                        </div>

                        <div className="featured-content">
                            <img className="landing-image" src={window.working2} alt="" />
                            <div className="featured-content-textbox">
                                <h2>Lackx makes collaboration easy</h2>
                                <h2>
                                    Share, organize, and work together with more efficiency
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>

            
            <LackxFeatures/>
            <Footer/>
            <SignUpModal changeView = {() => setIsOpen(false) || setSignIn(true)} onClose={() => setIsOpen(false)} open={isOpen}></SignUpModal>
            <LogInModal changeView = {() => setSignIn(false) || setIsOpen(true)} onClose={() => setSignIn(false)} open={signIn}/>
        </div>
        </>
    )
}
