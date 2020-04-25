import React from 'react'
import Nav from './Nav/Nav'

const Layout = props => {

    return (
        <React.Fragment>
            <Nav />
            {props.children}
            <p>footer</p>
        </React.Fragment>
    )
}

export default Layout