import React from 'react'
import PropTypes from "prop-types";

import './LookCloser.css'

const LookCloser = props =>
    <React.Fragment>
        <div className="close-btn" onClick={props.clickAway}>
            <i className="fas fa-times" />
        </div>
        <div className='dark-wrapper'>
            {/* the component itself */}
            <div className="look-closer">
                <h2 className="title">{props.title}</h2>
                {/* the main part */}
                <div className="content">
                    <div className="slider">
                        <img src={props.images[0]} alt={props.title}/>
                    </div>
                    {/* the right section */}
                    <div className="info">
                        <h3 className="price">
                            <span>${props.price}</span>
                            <i>awesome product</i>
                        </h3>
                        {/* buttons */}
                        <div className="buttons">
                            <div className="amount">
                                <button className="control">-</button>
                                <div className="number">1</div>
                                <button className="control">+</button>
                            </div>
                            <button className="add-to-cart">add to cart</button>
                        </div> {console.log(props.description)}
                        {/*buttons end */}
                        <div className="description">{props.description.content[0].content[0].value}
                        </div>
                        <div className="features">
                            {
                                props.features.map((feature, index) => (
                                    <div
                                        className="feature"
                                        key={index}
                                    >
                                        <i className="fas fa-chevron-right" /> {feature}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* the right section end */}
                </div>
                {/* the main part end */}
            </div>
            {/* the component itself end */}
        </div>
    </React.Fragment>

LookCloser.propTypes = {
    images: PropTypes.array,
    title: PropTypes.string,
    price: PropTypes.number,
    status: PropTypes.string || PropTypes.any, // any is for null option
    description: PropTypes.object,
    features: PropTypes.array
}

export default LookCloser