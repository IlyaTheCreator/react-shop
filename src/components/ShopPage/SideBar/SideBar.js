import React  from 'react'
import PropTypes from 'prop-types'

import './SideBar.css'

const SideBar = ({ categories, redirect, sex, currentCategory }) => {
    // setting the sidebar's items
    const items = categories.map((category, index) => {
        // if the category is active, apply according styles
        let activeStyles = currentCategory === category[1] ? { background: '#555', color: '#fff' } : null

        // extra check for the 'all' category
        if (category[0] === 'all' && currentCategory === 'all') {
            activeStyles = { background: '#555', color: '#fff' }
        }

        return (
            <p
                className='shop-category'
                style={activeStyles}
                key={index}
                // when a category is clicked, we make a push to another url which leads to
                // another contentful api call with our new specification for products
                onClick={() => redirect(category[1], sex)}
            >
                {category[0]}
            </p>
        )
    })

    return (
        <div className="shop-sidebar">
            {items}
        </div>
    )
}

SideBar.propTypes = {
    categories: PropTypes.array,
    redirect: PropTypes.func,
    sex: PropTypes.string,
    currentCategory: PropTypes.string
}

export default SideBar