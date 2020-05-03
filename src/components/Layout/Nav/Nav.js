import React, { useState, useEffect } from 'react'

import { NavLink } from "react-router-dom";
import DrawItem from './DrawItem/DrawItem'
import MobileAppear from "./MobileAppear/MobileAppear";
import { menCategories, womenCategories } from "./categories";
import './Nav.css'
import logo from '../../../assets/images/logo.png'

const Nav = () => {
    // state for handling mobile nav
    const [mobileAppear, setMobileAppear] = useState(false)

    // state for handing desktop nav
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [appearingItems, setAppearingItems] = useState({
        men: false,
        women: false
    })
    const [navItems] = useState([
        { name: 'Home', arrow: false, type: null, link: '/' },
        { name: 'Men', arrow: true, type: 'for-men', link: '/shop/men' },
        { name: 'Women', arrow: true, type: 'for-women', link: '/shop/women' },
        { name: 'Shop', arrow: false, type: null, link: '/shop-home' }
    ])

    // handling window resize
    const resizeHandle = () => setScreenWidth(window.innerWidth)

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

    // handling mobile nav button click
    const mobileNavClickHandle = () => setMobileAppear(!mobileAppear)

    // handling mobile nav appearing items
    const mobileNavAppearingHandle = type => {
        switch(type) {
            case 'for-men':
                setAppearingItems({
                    ...appearingItems,
                    men: !appearingItems.men
                })
                break
            case 'for-women':
                setAppearingItems({
                    ...appearingItems,
                    women: !appearingItems.women
                })
                break
            default: return
        }
    }

    // setting an event listener for window resize
    useEffect(() => {
        window.addEventListener('resize', resizeHandle)
    }, [])

    // rendering links for the desktop navigation out of the links state
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
                onClick={() => mouseLeaveHandle(link.type)}
                key={index}
            >
                <NavLink to={link.link}>
                    {link.name}
                    {arrow}
                </NavLink>
                {appearingEl}
            </li>
        )
    })

    // putting button section into its own variable to use it in the condition below
    const buttonSection = (
        <div className="right">
            <button className="login-btn"><i className="far fa-user" /> Login</button>
            <div className="vertical-divide" />
            <div className="nav-icons-wrapper">
                <div className="cart-icon">
                    <i className="fas fa-shopping-bag" />
                    <div className="products-amount"><p>5</p></div>
                </div>
                <div className="search-icon"><i className="fas fa-search" /></div>
            </div>
        </div>
    )

    return (
        <header>
            {
                screenWidth > 991 ? (
                    <nav className="desktop-nav">
                        <div className="left">
                            <img src={logo} alt="" className="logo"/>
                            <ul className="links">
                                {links}
                            </ul>
                        </div>
                        {buttonSection}
                    </nav>
                ) : (
                    <React.Fragment>
                        <nav className="mobile-nav">
                            <div
                                className="menu-button"
                                onClick={mobileNavClickHandle}
                            >
                                <i className="fas fa-bars" />
                            </div>
                            <img src={logo} alt="" className="mobile-logo"/>
                            {buttonSection}
                        </nav>
                        <MobileAppear
                            isShown={mobileAppear}
                            menCategories={menCategories}
                            womenCategories={womenCategories}
                            appearingItems={appearingItems}
                            clicked={mobileNavAppearingHandle}
                            navItems={navItems}
                        />
                    </React.Fragment>
                )
            }
        </header>
    )
}

export default Nav