import React from 'react'
import { connect } from 'react-redux'

import './NewArrivals.css'
import ShopItem from "../../ShopItem/ShopItem";

const NewArrivals = props => {
    const content = props.products.map((item, index) => (
            <ShopItem
                {...item.fields}
                key={index}
            />
        )
    )

    return (
        <div className="new-arrivals">
            {content}
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps)(NewArrivals)
