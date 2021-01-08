import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import './ShopPage.css'
import { fetchProducts } from "../../store/actions/actionCreators";
import ShopItem from "../ShopItem/ShopItem";
import SideBar from "./SideBar/SideBar";
import MobileSideBar from "./SideBar/MobileSideBar/MobileSideBar"
import {menCategories, womenCategories} from "./SideBar/categories";

const ShopPage = ({ match, location, history, fetchProducts, products }) => {
    // state for managing screen width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    // state for the information about the currect products category
    const [currentCategory, setCurrentCategory] = useState('')

    // getting the current sex from the url
    const sex = match.params.sex

    // handling resize which is passed into the eventListener attached to window
    const resizeHandle = () => setScreenWidth(window.innerWidth)

    useEffect(() => {
        // getting the current category from the url
        const query = new URLSearchParams(location.search);
        for (let param of query.entries()) {
            setCurrentCategory(param[1])
        }

        // setting the event listener on window resize
        window.addEventListener('resize', resizeHandle)

        // fetching products based on the current sex
        if (sex === 'men') {
            fetchProducts([ ['sex', 'men'] ])
        } else if (sex === 'women') {
            fetchProducts([ ['sex', 'women'] ])
        }

        // checking if the url is valid
        if (sex !== 'men' && sex !== 'women') {
            history.push('/shop-home')
        }
    }, [sex])

    // setting the shop product items
    const productItems = products.map((item, index) => (
            <ShopItem
                {...item.fields}
                key={index}
            />
        )
    )

    // function for managing fetching products from different categories by clicking
    // on categories in the SideBar component
    const redirectToCategory = (category, sex) => {
        // check for 'all' category
        if (category === 'all') {
            history.push('/shop/' + sex)
            fetchProducts([ ['sex', sex] ])
            setCurrentCategory(category)

            return
        }

        // changing the url
        history.push(match.url + '?category=' + category)
        // updating the component
        setCurrentCategory(category)

        // fetching products from another category
        sex === 'men'
        ? fetchProducts([ ['category', category], ['sex', 'men'] ])
        : fetchProducts([ ['category', category], ['sex', 'women'] ])
    }

    return (
        <div className='container shop-page'>
            <h1 className="shop-title">{ sex === 'men' ? "Men's shop items" : "Women's shop items" }</h1>
            <div className="content">
                {
                    // if width of a screen is greater than 991 pixels, show desktop sidebar,
                    // otherwise - mobile
                    screenWidth > 991 ? (
                        <SideBar
                            redirect={redirectToCategory}
                            categories={sex === 'men' ? menCategories : womenCategories}
                            sex={sex}
                            currentCategory={currentCategory ? currentCategory : 'all'}
                        />
                    ) : (
                        <MobileSideBar
                            redirect={redirectToCategory}
                            categories={sex === 'men' ? menCategories : womenCategories}
                            sex={sex}
                        />
                    )
                }
                <main>
                    <div className="products-wrapper">
                        {productItems}
                    </div>
                </main>
            </div>
        </div>
    )
}

ShopPage.propTypes = {
    match: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object,
    products: PropTypes.array,
    fetchProducts: PropTypes.func
}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => ({
    fetchProducts: query => dispatch(fetchProducts(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShopPage))
