import React from 'react'
import '../Introduce/introduce.css'
import Vector1 from "../../assets/images/Vector1.png";
import Vector2 from "../../assets/images/Vector2.png";
import boy from "../../assets/images/boy.png";
import Crown from "../../assets/images/crown.png";
import glassesimoji from "../../assets/images/glassesimoji.png";
import thumbup from "../../assets/images/thumbup.png";
import { FloatingDiv } from '../FloatingDiv/FloatingDiv';

export const Introduce = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-name">
          <span> Hi! I Am</span>
          <span> Risa Chanthaphat</span>
          <span>Fontend Developer with high level of experience in web disigning and development, producting the Quality work</span>
        </div>
        <div className="button-po introduce-button">
          <button>Hire Me</button>
        </div>
        <div className="intro-icons">
          <a href="http://github.com"><i className='bx bxl-github bx-lg'></i></a>
          <a href="http://skype.com"><i className='bx bxl-skype bx-lg'></i></a>
        </div>
      </div>
      <div className="intro-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div className="intro-web">
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div className="intro-design">
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        <div className="blur-pink"></div>
        <div className="blur-blue"></div>
      </div>
    </div>
  )
}
