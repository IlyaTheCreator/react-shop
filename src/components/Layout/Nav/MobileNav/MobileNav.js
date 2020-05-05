import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './MobileNav.css'
import logo from "../../../../assets/images/logo.png";
import MobileDrawItem from "./MobileDrawItem/MobileDrawItem";

const MobileNav = props =>
    <React.Fragment>
        <nav className="mobile-nav">
            <div
                className="menu-button"
                onClick={props.mobileNavClickHandle}
            >
                <i className="fas fa-bars" />
            </div>
            <Link to="/">
                <img src={logo} alt="" className="mobile-logo"/>
            </Link>
            {props.buttonSection}
        </nav>

        <MobileDrawItem
            isShown={props.isShown}
            // categories for mobile navigation are set in the MobileDrawItem component
            menCategories={props.menCategories}
            womenCategories={props.womenCategories}
            appearingItems={props.appearingItems}
            clicked={props.clicked}
            navItems={props.navItems}
        />
    </React.Fragment>

MobileNav.propTypes = {
    isShown: PropTypes.bool,
    menCategories: PropTypes.array,
    womenCategories: PropTypes.array,
    appearingItems: PropTypes.object,
    clicked: PropTypes.func,
    navItems: PropTypes.array,
    buttonSection: PropTypes.object,
    mobileNavClickHandle: PropTypes.func
}

export default MobileNav