import React, { useContext } from 'react'
import { themeContext } from '../../context/ContextTheme';
import "./../Toggle/toggle.css"

export const Toggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClickTheme = () => {
        theme.dispatch({ type: 'toggle' })
    }
    return (
        <div className="toggle" onClick={handleClickTheme}>
            <div className="icons-moon">
                <i className='bx bx-moon'></i>
            </div>
            <div className="icons-sun">
                <i className='bx bx-sun'></i>
            </div>
            <div className="toggle-button" style={darkMode ? { left: "2px" } : { right: "2px" }}>
            </div>
        </div>
    )
}
