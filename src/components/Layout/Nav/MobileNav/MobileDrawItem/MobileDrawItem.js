import React from 'react'
import PropTypes from 'prop-types'

import './MobileDrawItem.css'

const MobileDrawItem = props => {
    // getting items which appear when you tap on 'Men' section
    const menItems = props.menCategories.map(item => {
        return item.map((innerItem, index) => {
            // setting necessary classes
            const classes = innerItem.role === 'title' ? 'mobile-appear-title' : 'mobile-appear-category'

            // temporarily those are paragraphs
            return <p className={classes} key={index}>{innerItem.text}</p>
        })
    })

    // getting items which appear when you tap on 'Women' section
    const womenItems = props.womenCategories.map(item => {
        return item.map((innerItem, index) => {
            // setting necessary classes
            const classes = innerItem.role === 'title' ? 'mobile-appear-title' : 'mobile-appear-category'

            // temporarily those are paragraphs
            return <p href="#" className={classes} key={index}>{innerItem.text}</p>
        })
    })

    // setting up links
    const links = props.navItems.map((link, index) => {
        // checking whether to put an arrow or not (yes, if a link is extendable)
        const arrow = link.arrow ? <i className="fas fa-chevron-right" /> : null

        // setting the extendable item
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

    // as this nav is toggled by a tap on the button, we check this tap
    return props.isShown ? (
        <ul className="mobile-appear">
            {links}
        </ul>
    ) : null
}

MobileDrawItem.propTypes = {
    isShown: PropTypes.bool,
    menCategories: PropTypes.array,
    womenCategories: PropTypes.array,
    appearingItems: PropTypes.object,
    clicked: PropTypes.func,
    navItems: PropTypes.array
}

export default MobileDrawItem
