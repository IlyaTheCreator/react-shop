import React from 'react'
import './Footer.css'
import ShopFeatures from "./ShopFeatures/ShopFeatures";
import SubscribeInput from './SubscribeInput/SubscribeInput'
import VeryBottom from './VeryBottom/VeryBottom'
import GetApp from './GetApp/GetApp'
import items from './items'

const Footer = () => {
    // setting up inner columns on links
    const cols = items.map((item, index) => {
        const title = <h4 className="title">{item.title}</h4>

        const links = item.links.map((link, indexTwo) =>
            <a href="#" key={indexTwo} className="link">{link}</a>
        )

        return (
            <div className="col" key={index}>
                {title}
                {links}
            </div>
        )
    })

    return (
        <footer className="footer">
            <GetApp />
            <ShopFeatures />
            <div className="container">
                <div className="wrapper">
                    {cols}
                    <SubscribeInput />
                </div>
                <div className="divider" />
                <VeryBottom />
            </div>
        </footer>
    )
}

export default Footer