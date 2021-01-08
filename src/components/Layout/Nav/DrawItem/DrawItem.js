import React from 'react'
import PropTypes from 'prop-types'

import './DrawItem.css'

const DrawItem = ({categories, isShown, sex}) => {
    // getting the drawing item cols and its contents
    const catCols = categories.map((col, index) => {
        const content = col.map((item, indexTwo) =>
            item.role === 'title'
                ?  <h3 className="title" key={indexTwo}>{item.text}</h3>
                :  <a className="category" key={indexTwo} href="#"><p>{item.text}</p></a>
        )

        return <div className="col-sm" key={index}>{content}</div>
    })

    // setting appropriate classes and checking whether to add the editor col or not
    const classes = sex === 'male' ? 'for-men-appear' : 'for-women-appear'
    const additionalContent = sex === 'male' ? (
        <div className="editor">
            <div className="editor-image" />
            <a className="editor-link" href="#">Editor's pic</a>
        </div>
    ) : null

    return (
        <div
            className={classes}
            style={isShown ? {display: 'flex', animation: 'appear 0.3s ease forwards'} : {display: 'none'}}
        >
            {catCols}
            {additionalContent}
        </div>
    )
}

DrawItem.propTypes = {
    categories: PropTypes.array,
    isShown: PropTypes.bool,
    sex: PropTypes.string
}

export default DrawItem
