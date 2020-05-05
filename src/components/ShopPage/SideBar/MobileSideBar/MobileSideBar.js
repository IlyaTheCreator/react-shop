import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './MobileSideBar.css'

const MobileSideBar = ({ categories, redirect, sex }) => {
    // state for managing appearing of the sidebar
    const [isShown, setIsShown] = useState(false)

    // setting the sidebar's items
    const items = categories.map((category, index) => (
        <p
            // when a category is clicked, we make a push to another url which leads to
            // another contentful api call with our new specification for products
            onClick={() => {redirect(category[1], sex); setIsShown(false)}}
            className='shop-category'
            key={index}
        >
            {category[0]}
        </p>
    ))

    // managing a click on the sidebar
    const clickHandle = () => setIsShown(!isShown)

    return (
        <div className="mobile-sidebar">
            <p className="toggle-text" onClick={clickHandle}>
                Categories

                { isShown ? <i className="fas fa-chevron-up" /> : <i className="fas fa-chevron-down" /> }
            </p>
            { isShown ? items : null}
        </div>
    )
}

MobileSideBar.propTypes = {
    categories: PropTypes.array,
    redirect: PropTypes.func,
    sex: PropTypes.string
}

export default MobileSideBar