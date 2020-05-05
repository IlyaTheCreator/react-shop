import React from 'react'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'

const Layout = ({ children }) =>
    <React.Fragment>
        <Nav />
        {children}
        <Footer />
    </React.Fragment>

export default Layout