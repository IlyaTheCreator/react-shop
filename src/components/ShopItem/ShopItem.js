import React, { useState } from 'react'
import PropTypes from 'prop-types'

import LookCloser from './LookCloser/LookCloser'
import './ShopItem.css'

const ShopItem = props => {
    const [imageIndex, setImageIndex] = useState(0)
    const [lookCloserShow, setLookCloserShow] = useState(false)

    const mouseOverHandle = () => props.images.length > 0 ? setImageIndex(1) : null

    const mouseLeaveHandle = () => props.images.length > 0 ? setImageIndex(0) : null

    const cartClickHandle = () => alert('you item has been added to the card')

    const lookCloserClickHandle = () => {
        document.querySelector('body').style.overflow = 'hidden'
        setLookCloserShow(true)
    }

    const clickAwayHandle = () => {
        document.querySelector('body').style.overflow = 'visible'
        setLookCloserShow(false)
    }

    let topItem

    if (props.status) {
        if (props.status === 'out-of-stock') {
            topItem = <span className="top-item out-of-stock">out of stock!</span>
        } else {
            topItem = <span className="top-item sale">on sale!</span>
        }
    }

    return (
        <React.Fragment>
            {lookCloserShow ? <LookCloser clickAway={clickAwayHandle} {...props}/> : null}
            <div className="shop-item">
                {topItem}
                <div className="image-wrapper">
                    <img
                        onMouseOver={mouseOverHandle}
                        onMouseLeave={mouseLeaveHandle}
                        src={props.images[imageIndex]}
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
                <p>${props.price}</p>
            </div>
        </React.Fragment>
    )
}

ShopItem.propTypes = {
    images: PropTypes.array,
    title: PropTypes.string,
    price: PropTypes.string || PropTypes.number,
    status: PropTypes.string || PropTypes.any, // any is for null option
    description: PropTypes.string,
    features: PropTypes.array
}

export default ShopItem