import React from 'react'
import Carousel from "react-elastic-carousel";

import './Homepage.css'
import SectionDivider from "../Layout/SectionDivider/SectionDivider";
import PopularCategories from "./PopularCategories/PopularCategories";
import WeeklyFeatured from "./WeeklyFeatured/WeeklyFeatured";
import NewArrivals from './NewArrivals/NewArrivals'

import image_1 from '../../assets/images/sections/welcome/1.jpg'
import image_2 from '../../assets/images/sections/welcome/2.jpg'
import image_3 from '../../assets/images/sections/welcome/3.jpg'

const Homepage = () =>
        <div className='homepage'>
            {/*first section*/}
                <Carousel
                    enableMouseSwipe={false}
                    showArrows={false}
                    enableAutoPlay={true}
                    autoPlaySpeed={4500}
                >
                    <div className="banner">
                        <img src={image_1} alt=""/>
                        <div className="text">
                            <h1>new arrivals</h1>
                            <button>shop</button>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={image_2} alt=""/>
                        <div className="text">
                            <h1>abuba</h1>
                            <button>biba</button>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={image_3} alt=""/>
                        <div className="text">
                            <h1>hoho</h1>
                            <button>moho</button>
                        </div>
                    </div>
                </Carousel>
            {/*first section end*/}
            <div className="container">
                <SectionDivider text="Shop popular categories" />
                <PopularCategories />
                <SectionDivider text="Weekly Featured Items" />
                <WeeklyFeatured />
                <SectionDivider text="New Arrivals" />
                <NewArrivals />
            </div>
        </div>

export default Homepage