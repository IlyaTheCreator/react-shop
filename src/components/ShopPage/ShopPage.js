import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './ShopPage.css'
import { fetchAllProducts } from "../../store/actions/actionCreators";
import ShopItem from "../ShopItem/ShopItem";
import SideBar from "./SideBar/SideBar";
import Filters from "./Filters/Filters";
import {menCategories, womenCategories} from "./SideBar/categories";

const ShopPage = props => {
    const sex = props.match.params.sex
    const query = props.location.search

    useEffect(() => {
        props.fetchProducts()

        if (sex !== 'men' && sex !== 'women') {
            props.history.push('/shop-home')
        }
    }, [])

    const products = props.products.map((item, index) => (
            <ShopItem
                {...item.fields}
                key={index}
            />
        )
    )

    let title

    if (sex === 'men') {
        switch(query) {
            default:
                title = "Men's shop items"
        }
    } else {
        switch(query) {
            default:
                title = "Women's shop items"
        }
    }

    return (
        <div className='container shop-page'>
            <h1 className="shop-title">{title}</h1>
            <div className="content">
                <SideBar
                    categories={sex === 'men' ? menCategories : womenCategories}
                />
                <main>
                    <Filters />
                    <div className="products-wrapper">
                        {products}
                    </div>
                </main>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShopPage))