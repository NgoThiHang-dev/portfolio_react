import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./../Testimonial/testimonial.css"
import 'swiper/css';
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../assets/images/profile1.jpg";
import profilePic2 from "../../assets/images/profile2.jpg";
import profilePic3 from "../../assets/images/profile3.jpg";
import profilePic4 from "../../assets/images/profile4.jpg";

export const Testimonial = () => {
    const testClient = [
        {
            img: profilePic1,
            review: "My name’s Lucia and I’m from Spain. I was born in the south of Spain but I live in Barcelona. I work as a translator, and I don’t have much time for hobbies these days. But in the future, I’d like to try yoga. I’m taking this class because I want to improve my speaking in English",
        },
        {
            img: profilePic2,
            review: "My name’s Lucia and I’m from Spain. I was born in the south of Spain but I live in Barcelona. I work as a translator, and I don’t have much time for hobbies these days. But in the future, I’d like to try yoga. I’m taking this class because I want to improve my speaking in English",
        },
        {
            img: profilePic3,
            review: "My name’s Lucia and I’m from Spain. I was born in the south of Spain but I live in Barcelona. I work as a translator, and I don’t have much time for hobbies these days. But in the future, I’d like to try yoga. I’m taking this class because I want to improve my speaking in English",
        },
        {
            img: profilePic4,
            review: "My name’s Lucia and I’m from Spain. I was born in the south of Spain but I live in Barcelona. I work as a translator, and I don’t have much time for hobbies these days. But in the future, I’d like to try yoga. I’m taking this class because I want to improve my speaking in English",
        },
    ]
    return (
        <div className="testimonial">
            <div className="testimonial-heading">
                <div className="testimonial-text">
                    <span>Clients always get </span>
                    <span>Exceptional Work </span>
                    <span>from me...</span>
                </div>
                <div className="blur testimonial-blur1"></div>
                <div className="blur testimonial-blur2"></div>
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                    {testClient.map((testClient, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="testimonial-swiper">
                                    <img src={testClient.img} alt="" />
                                    <span>{testClient.review}</span>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>

    )
}
