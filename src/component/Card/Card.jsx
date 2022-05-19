import React from 'react'
import "./../Card/card.css"

export const Card = ({ emoji, heading, detail, color }) => {
    return (
        <div className="card">
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="card-button">LEARN MORE</button>
        </div>
    )
}
