import React from 'react'
import appImg from '../../../../assets/images/app.png'
import './GetApp.css'

const GetApp = () =>
    <div className="outer-wrapper">
        <div className="container get-app">
            <div className="col">
                <div className="centered">
                    <h2>follow. find. favorite. discover fashion on the go.</h2>
                    <p className='margined-text'>Proactively enable Corporate Benefits.</p>
                    <div className="download-btns">
                        <button className="apple">
                            <i className="fa fa-apple" />
                            <div className="text">
                                <i className="cursor-text">download canvas shop</i>
                                <p>app store</p>
                            </div>
                        </button>
                        <button className="android">
                            <i className="fa fa-google" />
                            <div className="text">
                                <i className="cursor-text">download canvas shop</i>
                                <p>google play</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <img src={appImg} className='app-image' alt="app-img"/>
        </div>
    </div>


export default GetApp
