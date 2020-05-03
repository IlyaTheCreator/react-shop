import React  from 'react'
import './SideBar.css'

const SideBar = ({ categories }) => {
    const items = categories.map((category, index) => (
        <p className='shop-category' key={index}>{category}</p>
    ))

    return (
        <div className="shop-sidebar">
            {items}
        </div>
    )
}

export default SideBar