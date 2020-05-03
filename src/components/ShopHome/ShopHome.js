import React from 'react'
import { Link } from 'react-router-dom'
import './ShopHome.css'

const ShopHome = () => {
    return (
        <div className='container shop-home'>
            <Link to="/shop/men" className="col men">
                <h1>Men</h1>
            </Link>
            <Link to="/shop/women" className="col women">
                <h1>Women</h1>
            </Link>
        </div>
    )
}

export default ShopHome