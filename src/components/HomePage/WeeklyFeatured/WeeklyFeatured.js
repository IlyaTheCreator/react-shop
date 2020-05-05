import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './WeeklyFeatured.css'
import Carousel from "react-elastic-carousel";
import ShopItem from "../../ShopItem/ShopItem";

const WeeklyFeatured = ({ products }) => {
    // setting carousel breakpoints so it is responsive
    const [carouselBreakPoints] = useState([
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 510, itemsToShow: 3 },
        { width: 750, itemsToShow: 4 },
        { width: 991, itemsToShow: 5 },
    ])

    const content = products.map((item, index) => (
            <ShopItem
                {...item.fields}
                key={index}
            />
        )
    )

    return (
        <div className="weekly-items">
            <Carousel
                breakPoints={carouselBreakPoints}
                itemsToShow={5}
                itemsToScroll={1}
                enableMouseSwipe={false}
                pagination={false}
                enableAutoPlay={true}
                autoPlaySpeed={4000}
                showArrows={false}
                transitionMs={300}
            >
                {content}
            </Carousel>
        </div>
    )
}

WeeklyFeatured.propTypes = {
    products: PropTypes.array
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps)(WeeklyFeatured)