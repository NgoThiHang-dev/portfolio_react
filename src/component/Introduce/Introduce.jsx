import React, { useContext } from 'react'
import '../Introduce/introduce.css'
import Vector1 from "../../assets/images/Vector1.png";
import Vector2 from "../../assets/images/Vector2.png";
import boy from "../../assets/images/boy.png";
import Crown from "../../assets/images/crown.png";
import glassesimoji from "../../assets/images/glassesimoji.png";
import thumbup from "../../assets/images/thumbup.png";
import { FloatingDiv } from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../context/ContextTheme';
import { motion } from "framer-motion";

export const Introduce = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-name">
          <span style={{ color: darkMode ? "white" : "" }}> Hi! I Am</span>
          <span> Risa Chanthaphat</span>
          <span>Fontend Developer with high level of experience in web disigning and development, producting the Quality work</span>
        </div>
        <div className="button-po introduce-button">
          <button>Hire Me</button>
        </div>
        <div className="intro-icons">
          <a href="http://github.com"><i className='bx bxl-github bx-lg'></i></a>
          <a href="http://skype.com"><i className='bx bxl-skype bx-lg'></i></a>
          <a href="http://facebook.com"><i className='bx bxl-facebook-circle bx-lg'></i></a>
        </div>
      </div>
      <div className="intro-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div initial={{ top: "10rem", left: "68%" }} whileInView={{ left: "59%" }} transition={transition} className="intro-web">
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div initial={{ left: "-19rem", top: "-12.5rem" }} whileInView={{ left: "3rem" }} transition={transition} className="intro-design">
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        <div className="blur-pink"></div>
        <div className="blur-blue"></div>
      </div>
    </div>
  )
}
