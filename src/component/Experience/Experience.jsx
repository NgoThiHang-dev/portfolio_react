import React, { useContext } from 'react'
import { themeContext } from '../../context/ContextTheme';
import "../Experience/experience.css"

export const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>8+</div>
        <span>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>20+</div>
        <span>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>5+</div>
        <span>companies </span>
        <span>Work</span>
      </div>
    </div>
  )
}
