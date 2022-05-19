import React from 'react'
import "../FloatingDiv/floating.css"

export const FloatingDiv = ({ image, txt1, txt2 }) => {
    return (
        <div className="floating-div">
            <img src={image} alt="" />
            <div className="floating-text">
                <span>{txt1} </span>
                <br />
                <span>{txt2}</span>
            </div>
        </div>
    )
}
