import React from 'react'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'

const Layout = props => {

    return (
        <React.Fragment>
            <Nav />
                {props.children}
            <Footer />
        </React.Fragment>
    )
}

export default Layout