import React from 'react'
import "./../Works/works.css"
import Upwork from "../../assets/images/Upwork.png";
import Fiverr from "../../assets/images/fiverr.png";
import Amazon from "../../assets/images/amazon.png";
import Shopify from "../../assets/images/Shopify.png";
import Facebook from "../../assets/images/Facebook.png";

export const Works = () => {
    return (
        <div className="works">
            <div className="works-left">
                <div className="works-name">
                    <span> Works for All these</span>
                    <span> Brands & Clients</span>
                    <span>Brands are built one thought, one idea at a time. But there’s a big difference between thinking something and actually doing it. We bridge that gap, transforming complex strategy and brilliant ideas into bold experiences. We put your stories to work, engaging audiences and getting lasting results.</span>
                </div>
                <div className="button-po works-button">
                    <button>Hire Me</button>
                </div>
            </div>
            <div className="works-right">
                <div className="works-main-circle">
                    <div className="works-sec-circle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="works-sec-circle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="works-sec-circle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="works-sec-circle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="works-sec-circle">
                        <img src={Facebook} alt="" />
                    </div>
                </div>
                <div className="works-back-circle blueCircle"></div>
                <div className="works-back-circle yellowCircle"></div>
            </div>
        </div>
    )
}
