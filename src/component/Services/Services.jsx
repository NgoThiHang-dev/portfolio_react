import React from 'react'
import { Card } from '../Card/Card'
import HeartEmoji from "../../assets/images/heartemoji.png";
import Glasses from "../../assets/images/glasses.png";
import Humble from "../../assets/images/humble.png";
import "./../Services/services.css"

export const Services = () => {
    return (
        <div className="services">
            <div className="services-awesome">
                <span>My Awesome</span>
                <span>services</span>
                <spane>
                    Lorem ispum is simpley dummy text of printing of printing Lorem
                    <br />
                    ispum is simpley dummy text of printing
                </spane>
                <div className="button-po">
                    <a href="">
                        <button className="services-button">Download CV</button>
                    </a>
                </div>
                <div className="blur services-blur-1"></div>
            </div>
            <div className="services-cards">
                <div className="services-design">
                    <Card
                        emoji={HeartEmoji}
                        heading={"Design"}
                        detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
                    />
                </div>
                <div className="services-developer">
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html, Css, JavaScript, React, Nodejs, Express"}
                    />
                </div>
                <div className="services-ui">
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={
                            "Lorem ispum dummy text are usually use in section where we need some random text"
                        }
                        color="rgba(252, 166, 31, 0.45)"
                    />
                </div>
                <div className="blur services-blur-2"></div>
            </div>
        </div>
    )
}
