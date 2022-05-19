import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./../Portfolio/portfolio.css";
import 'swiper/css';
import Sidebar from "../../assets/images/sidebar.png";
import Ecommerce from "../../assets/images/ecommerce.png";
import HOC from "../../assets/images/hoc.png";
import MusicApp from "../../assets/images/musicapp.png";

export const Portfolio = () => {
    return (
        <div className="portfolio">
            <span>Recent Projects</span>
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
