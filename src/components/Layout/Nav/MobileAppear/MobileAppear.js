import React from 'react'
import PropTypes from 'prop-types'

import './MobileAppear.css'

const MobileAppear = props => {
    const menItems = props.menCategories.map(item => {
        return item.map((innerItem, index) => {
            const classes = innerItem.role === 'title' ? 'mobile-appear-title' : 'mobile-appear-category'

            return <a className={classes} key={index}>{innerItem.text}</a>
        })
    })

    const womenItems = props.womenCategories.map(item => {
        return item.map((innerItem, index) => {
            const classes = innerItem.role === 'title' ? 'mobile-appear-title' : 'mobile-appear-category'

            return <a href="#" className={classes} key={index}>{innerItem.text}</a>
        })
    })

    const links = props.navItems.map((link, index) => {
        const arrow = link.arrow ? <i className="fas fa-chevron-right" /> : null
        let appearingEl = null

        if (link.type === 'for-men') {
            appearingEl = props.appearingItems.men ? menItems : null
        } else if (link.type === 'for-women') {
            appearingEl = props.appearingItems.women ? womenItems : null
        }

        return (
            <React.Fragment key={index}>
                <li
                    className="mobile-appear-item"
                    onClick={() => props.clicked(link.type)}
                >
                    {
                        arrow ? <span>{link.name} {arrow}</span> : <a href="#">{link.name} </a>
                    }
                </li>
                {appearingEl}
            </React.Fragment>
        )
    })

    return props.isShown ? (
        <ul className="mobile-appear">
            {links}
        </ul>
    ) : null
}

MobileAppear.propTypes = {
    isShown: PropTypes.bool,
    menCategories: PropTypes.array,
    womenCategories: PropTypes.array,
    appearingItems: PropTypes.object,
    clicked: PropTypes.func,
    navItems: PropTypes.array
}

export default MobileAppear