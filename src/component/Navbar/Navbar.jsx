import React from 'react'
import { Link } from 'react-scroll/modules'
import '../Navbar/navbar.css'
import { Toggle } from '../Toggle/Toggle'


export const Navbar = () => {
    return (
        <div className="nav-wrapper">
            <div className="nav-left">
                <div className="nav-left-name">Logo</div>
                <Toggle />
            </div>
            <div className="nav-right">
                <div className="nav-list-menu">
                    <ul>
                        <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                            Home
                        </Link>
                        <li>
                            <Link to="services" spy={true} smooth={true}>
                                Serivces
                            </Link>
                        </li>
                        <li>
                            <Link to="experience" spy={true} smooth={true}>
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link to="works" spy={true} smooth={true}>
                                Works
                            </Link>
                        </li>
                        <li>
                            <Link to="portfolio" spy={true} smooth={true}>
                                Protfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="testimonial" spy={true} smooth={true}>
                                About us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="button-po nav-button">
                    <Link to="contact" spy={true} smooth={true}>
                        <button>Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
