import React, { useState } from 'react'
import Modal from '../modals/modals';

export default function Landing(){
    
    const [modalPage, setModalPage] = useState(0);
    const [isOpen, setIsOpen] = useState(false)

        return (
        <>
        <div className="landing container">
            <div className = "text-feature">
                <h1 className = "seo-lackx">Lackx makes it <span className="colored-text-yellow">almost pleasant</span> to work with others</h1>
            </div>

            <div>
                <button className="sign-in">Sign In</button>
                <button onClick={() => setIsOpen(true)} className="get-started">Get Started</button>
            </div>

            <div className="featured-content">
                <img className="landing-image" alt="" />
                <div className="featured-content-textbox">
                    <h2>Lackx makes collaboration easy</h2>
                    <h2>
                        Share, organize, and work together with more efficiency
                    </h2>
                </div>
            </div>
        </div>
        <Modal onClose={() => setIsOpen(false)} open={isOpen}></Modal>
        </>
    )
}
