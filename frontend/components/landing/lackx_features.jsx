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
            <div className="lackx-features-container">
                <section ref={ref} className="feature-section about-channels">
                    <div className="featured">
                        <div className="featured-text">
                            <h2>
                                Move faster by organizing your work life
                            </h2>
                            <p className="text-sm">
                                The key to productivity in Lackx is organized spaces called channels—a different one for everything you’re working on. With all the people, messages and files related to a topic in one place, you can move a whole lot faster.
                            </p>
                        </div>
                        <div className="featured-image">
                            <video className="vid-right" autoPlay loop muted playsInline poster="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/static/img-section-01-static.jpg">
                                <source src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/video/img-hp-section-01.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </section>

                <div className="spacing-med"></div>

                <section className="feature-section">
                    <div className="featured">
                        <div className="featured-image">
                            <video aria-describedby="focus-time" autoPlay loop muted playsInline poster="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/static/img-section-02-static.jpg">
                                <source src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/video/img-hp-section-02.mp4" type="video/mp4" />
                            </video>
                        </div>

                        <div className="featured-text">
                            <h2>
                                Focus your time, on your own terms
                            </h2>
                            <p className="text-sm">
                                Give yourself the flexibility to work when, where and how you work best. Take control of notifications, collaborate live or on your own time, and find answers in conversations from across your company.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
