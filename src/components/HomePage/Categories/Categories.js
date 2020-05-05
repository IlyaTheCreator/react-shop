import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'

const Categories = () =>
    <div className="popular-categories">
        <Link to="/shop/men" className="for-him">for him</Link>
        <Link to="/shop/women" className="for-her">for her</Link>
        <Link to="/shop/women" className="dresses">cool dresses</Link>
        <Link to="/shop/men" className="footwear">his footwear</Link>
        <Link to="/shop/men" className="sportswear">his sportswear</Link>
    </div>

export default Categories