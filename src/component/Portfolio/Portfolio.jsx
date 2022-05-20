import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./../Portfolio/portfolio.css";
import 'swiper/css';
import Sidebar from "../../assets/images/sidebar.png";
import Ecommerce from "../../assets/images/ecommerce.png";
import HOC from "../../assets/images/hoc.png";
import MusicApp from "../../assets/images/musicapp.png";
import { themeContext } from '../../context/ContextTheme';

export const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio">
            <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
            <span>Portfolio</span>
            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
