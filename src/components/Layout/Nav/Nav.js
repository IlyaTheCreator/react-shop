import React, { useState } from 'react'

import DrawItem from './DrawItem/DrawItem'
import { menCategories, womenCategories } from "./categories";
import './Nav.css'
import logo from '../../../assets/images/logo.png'

const Nav = () => {
    // state for handling appearing/disappearing of men/female sections in desktop navigation
    const [appearingItems, setAppearingItems] = useState({
        men: false,
        women: false
    })

    // state for rendering desktop navigation links
    const [navItems] = useState([
        { name: 'Home', arrow: false, type: null },
        { name: 'Men', arrow: true, type: 'for-men' },
        { name: 'Women', arrow: true, type: 'for-women' },
        { name: 'Shop', arrow: false, type: null }
    ])

    // handling mouseOver event
    const mouseOverHandle = type => {
        switch(type) {
            case 'for-men':
                setAppearingItems({
                    ...appearingItems,
                    men: true
                })
                break
            case 'for-women':
                setAppearingItems({
                    ...appearingItems,
                    women: true
                })
                break
            default: return
        }
    }

    // handling mouseLeave event
    const mouseLeaveHandle = type => {
        switch(type) {
            case 'for-men':
                setAppearingItems({
                    ...appearingItems,
                    men: false
                })
                break
            case 'for-women':
                setAppearingItems({
                    ...appearingItems,
                    women: false
                })
                break
            default: return
        }
    }

    // rendering links out of the links state
    const links = navItems.map((link, index) => {
        // conditionals for arrows and appearing sections
        const arrow = link.arrow ? <i className="fas fa-chevron-down" /> : null
        let appearingEl = null

        if (link.type === 'for-men') {
            appearingEl = <DrawItem isShown={appearingItems.men} categories={menCategories} sex='male' />
        } else if (link.type === 'for-women') {
            appearingEl = <DrawItem isShown={appearingItems.women} categories={womenCategories} sex='female' />
        }

        return (
            <li
                onMouseOver={() => mouseOverHandle(link.type)}
                onMouseLeave={() => mouseLeaveHandle(link.type)}
                key={index}
            >
                <a href="/">
                    {link.name}
                    {arrow}
                </a>
                {appearingEl}
            </li>
        )
    })

    return (
        <header>
            <nav className="desktop-nav">
                <div className="left">
                    <img src={logo} alt="" className="logo"/>
                    <ul className="links">
                        {links}
                    </ul>
                </div>
                <div className="right">
                    <button className="login-btn"><i className="far fa-user" /> Login</button>
                    <div className="vertical-divide" />
                    <div className="cart-icon">
                        <i className="fas fa-shopping-bag" />
                        <div className="products-amount"><p>5</p></div>
                    </div>
                    <div className="search-icon"><i className="fas fa-search" /></div>
                </div>
            </nav>
        </header>
    )
}

export default Nav