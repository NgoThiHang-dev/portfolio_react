import React from 'react'
import '../Navbar/navbar.css'

export const Navbar = () => {
    return (
        <div className="nav-wrapper">
            <div className="nav-left">
                <div className="nav-left-name">Logo</div>
                <span>Toggle</span>
            </div>
            <div className="nav-right">
                <div className="nav-list-menu">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>About us</li>
                    </ul>
                </div>
                <div className="button-po nav-button">
                    <button>Contact</button>
                </div>
            </div>
        </div>
    )
}
