import React from 'react'
import './ShopPage.css'

import Categories from "../Categories/Categories";

const ShopPage = props => {
    console.log(props)

    return (
        <div className='container shop-home'>
            <h1>Choose your category</h1>
            <Categories />
        </div>
    )
}

export default ShopPage