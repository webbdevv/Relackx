import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav">
                <li className="nav-item brand">
                    <a className="nav-link active" href="#">lackx</a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" href="#">Insta</a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" href="#">Github</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Facebook</a>
                </li>

                <li className="nav-item right">
                    <a className="nav-link" href="#">Sign In</a>
                </li>
            </ul>
        </nav>
    )
}
