import React, { useState } from 'react'
import PropTypes from 'prop-types'

import LookCloser from './LookCloser/LookCloser'
import './ShopItem.css'

const ShopItem = props => {
    // state for managing appearing of the LookCloser component
    const [lookCloserShow, setLookCloserShow] = useState(false)

    // handling clicking on the cart icon which appears when you hover over an item
    const cartClickHandle = () => alert('you item has been added to the card')

    // handling clicking on the search icon which also appears when you hover over an item,
    // setting all the necessary styles and managing the state
    const lookCloserClickHandle = () => {
        document.querySelector('body').style.overflow = 'hidden'
        document.querySelector('header').style.position = 'static'
        setLookCloserShow(true)
    }

    // handling clicking on the close button of the LookCloser component
    const clickAwayHandle = () => {
        document.querySelector('body').style.overflow = 'visible'
        document.querySelector('header').style.position = 'sticky'
        setLookCloserShow(false)
    }

    // setting that little red or black text item
    const topItem = props.status
    ? <span className="top-item out-of-stock">out of stock!</span>
    : <span className="top-item sale">on sale!</span>

    return (
        <React.Fragment>
            {lookCloserShow ? <LookCloser clickAway={clickAwayHandle} {...props}/> : null}
            <div className="shop-item">
                {topItem}
                <div className="image-wrapper">
                    <img
                        src={props.images[0]}
                        alt={props.title}
                    />

                    <div className="buttons-hidden">
                        <div onClick={cartClickHandle}>
                            <i className="fas fa-shopping-bag" />
                        </div>
                        <div onClick={lookCloserClickHandle}>
                            <i className="fas fa-search" />
                        </div>
                    </div>
                </div>
                <h5>{props.title}</h5>
                <p>${props.price} <span className="item-category"> {props.category}</span></p>
            </div>
        </React.Fragment>
    )
}

ShopItem.propTypes = {
    images: PropTypes.array,
    title: PropTypes.string,
    price: PropTypes.number,
    status: PropTypes.string || PropTypes.any, // any is for null option
    description: PropTypes.object,
    features: PropTypes.array
}

export default ShopItem