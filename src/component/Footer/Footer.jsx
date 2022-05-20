import React from 'react'
import "./../Footer/footer.css"
import wave from "../../assets/images/wave.png";

export const Footer = () => {
    return (
        <div className="footer">
            <img src={wave} alt="Wave" />
            <div className="footer-text-content">
                <span>hangnt01101999@gmail.com</span>
                <div className="footer-icons">
                    <a href="http://github.com"><i className='bx bxl-github bx-lg'></i></a>
                    <a href="http://skype.com"><i className='bx bxl-skype bx-lg'></i></a>
                    <a href="http://facebook.com"><i className='bx bxl-facebook-circle bx-lg'></i></a>
                </div>
            </div>
        </div>
    )
}
