import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import './HomePage.css'
import SectionDivider from "../Layout/SectionDivider/SectionDivider";
import Categories from "../Categories/Categories";
import WeeklyFeatured from "./WeeklyFeatured/WeeklyFeatured";
import NewArrivals from './NewArrivals/NewArrivals'
import { Link } from 'react-router-dom'
import {fetchAllProducts} from "../../store/actions/actionCreators";

const HomePage = props => {
    useEffect(() => { props.fetchProducts() }, [])

    return (
        <div className='homepage'>
            {/*first section*/}
            <div className="banner-wrapper">
                <div className="banner">
                    <div className="text">
                        <h1>new arrivals</h1>
                        <Link className="to-shop" to="shop-home">shop</Link>
                    </div>
                </div>
            </div>
            {/*first section end*/}
            <div className="container">
                <SectionDivider text="Shop popular categories" />
                <Categories />
                <SectionDivider text="Weekly Featured Items" />
                <WeeklyFeatured />
                <SectionDivider text="New Arrivals" />
                <NewArrivals />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchAllProducts())
})

export default connect(null, mapDispatchToProps)(HomePage)