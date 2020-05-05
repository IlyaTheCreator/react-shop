import React from 'react'
import './ShopFeatures.css'

const ShopFeatures = () =>
    <React.Fragment>
        <div className="shop-features container">
            <p>
                <i className="fas fa-globe-europe" />
                <strong>free shipping</strong> & easy returns
            </p>
            <p>
                <i className="far fa-address-book" />
                <strong>geniune products</strong> guaranteed
            </p>
            <p>
                <i className="fas fa-lock" />
                <strong>256-bit</strong> secured checkouts
            </p>
        </div>
        <div className="divider" />
    </React.Fragment>

export default ShopFeatures