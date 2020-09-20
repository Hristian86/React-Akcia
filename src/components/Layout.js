import React, { Component } from 'react';
import Navbar from './Navbar';
//import { Container } from 'react-bootstrap';
//import Footer from './Footer';
//import '../index.css';
import ErrorBoundry from './ErrorPage/ErrorBoundry';
import Footer from './Pages/Footer/Footer';
//import CookieAccept from './Privacy/CookieAccept';

export default class Layout extends Component {


    render() {

        return (
            <div>
                <ErrorBoundry>
                    <Navbar />
                    <div className="container-fluid mt-3 wrapper-layout pl-0 pr-0">
                        {this.props.children}
                    </div>
                    <Footer />
                </ErrorBoundry>
            </div>
        )
    }
}