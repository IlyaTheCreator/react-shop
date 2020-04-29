import React from 'react'
import './Homepage.css'
import SectionDivider from "../Layout/SectionDivider/SectionDivider";
import PopularCategories from "./PopularCategories/PopularCategories";
import WeeklyFeatured from "./WeeklyFeatured/WeeklyFeatured";

const Homepage = () => {

    return (
        <div className='homepage'>
            {/*first section*/}
            <div className="banner">
                <div className="text">
                    <h1>new arrivals</h1>
                    <button>shop</button>
                </div>
            </div>
            {/*first section end*/}
            <div className="container">
                <SectionDivider text="Shop popular categories" />
                <PopularCategories />
                <SectionDivider text="Weekly Featured Items" />
                <WeeklyFeatured />
                <SectionDivider text="New Arrivals" />
            </div>
        </div>
    )
}

export default Homepage