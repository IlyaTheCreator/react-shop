import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './NewArrivals.css'
import ShopItem from "../../ShopItem/ShopItem";

const NewArrivals = ({ products }) => {
    const content = products.map((item, index) => (
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

NewArrivals.propTypes = {
    products: PropTypes.array
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps)(NewArrivals)
