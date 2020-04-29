import React from 'react'
import './SectionDivider.css'

const SectionDivider = props =>
    <div className="section-divider">
        <div className="dots"></div>
        <p>{props.text}</p>
        <div className="dots"></div>
    </div>

export default SectionDivider