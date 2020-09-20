import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Button, FormControl, Form } from 'react-bootstrap';
import { Collapse, Container, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'react-bootstrap';
//import { Dropdown } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Link } from 'react-router-dom';
//import About from './About';
//import Register from './Auth/Register';
//import LogIn from './Auth/LogIn';
//import Cards from './Cards/Cards';
//import ProductList from './Products/ProductList';
//import GetQuery from './FirebaseDB/Query-Service/GetQuery';
//import ProductLeyout from './Products/ProductLayout';
//import getCookie from './Cookies/GetCookie';
//import LocalizationFunc from '../Localization/LocalizationFunc';
//import setCookie from './Cookies/SetCookie';
//import getUserByToken from './Auth/GetUserByToken';
import './Navbar.css';
import getCookie from './Cookies/GetCookie';
import getUserByToken from './Auth/GetUserByToken';
import setCookie from './Cookies/SetCookie';

export default class navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoged: false,
            user: null
        }

    }

    //language = () => {
    //    const lang = getCookie('language');
    //    if (lang === undefined) {
    //        setCookie('language', 'BG', 5);
    //        this.setState({
    //            currentlanguage: lang
    //        });
    //        window.location.reload(false);
    //    }
    //    if (lang != this.state.currentlanguage) {
    //        window.location.reload(false);
    //        this.setState({
    //            currentlanguage: lang
    //        });
    //    }
    //}

    //setLanguage = (e) => {
    //    const lang = e.target.value;
    //    if (lang == "EN") {
    //        setCookie("language", "EN", 5);
    //        console.log(lang);
    //    } else if (lang == "BG") {
    //        setCookie("language", "BG", 5);
    //        console.log(lang);
    //    }
    //    this.language();
    //}

    componentDidMount() {
        this.cookieUser();
    }

    cookieUser = async () => {
        //const userCheckOnStart = await getUserByToken();
        //if (userCheckOnStart.error) {
        //    //console.log(userCheckOnStart);
        //    this.setState({
        //        user: null,
        //        isLoged: false
        //    });
        //    return;
        //}
        
        const currentUser = getCookie("user");
        const userName = getCookie("user_name");
        const cookieChek = getCookie("cheked");

        const token = getCookie("token");

        if (userName === null || userName === undefined || userName === "") {
            if (currentUser && cookieChek === "") {
                const user = await getUserByToken();

                if (await user.displayName !== undefined) {
                    if (user.displayName.length > 2) {
                        setCookie("user_name", user.displayName, 5);
                    }
                }
                if (await user.error) {
                    console.log(user.error);
                }
                setCookie("cheked", "cheked", 5);
            }
        }

        const currUserName = getCookie("user_name");
        //To Do : add loged user to redux global state
        if (currentUser) {
            if (currUserName) {
                this.setState({
                    user: currUserName,
                    isLoged: true
                });
            } else {
                this.setState({
                    user: currentUser,
                    isLoged: true
                });
            }
        } else {
            this.setState({
                user: null,
                isLoged: false
            });
        }
        console.log(currentUser);
    }

    prevDef(e) {

        e.preventDefault();
    }

    render() {

        if (true) {
            return (
                <nav className="navbar navbar-default main-navbar">
                    <div className="container main-container">
    
    <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>


                            <h1 className="remove-bottom"><a className="nav-link-color" href="/" id="logo">Sweety <span className="text-color-change">Cons</span></a></h1>
                        </div>

    <div className="collapse navbar-collapse remove-bottom-right" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                              
                              
                            </ul>
                            
                            <ul className="nav navbar-nav navbar-right">

                                {/*<li className="cta"><a href="/registercode" className="nav-link-color">Активни промоции</a></li>*/}
                                <li className="call"><a href="tel://123456789" className="nav-link-color"><i className="icon-phone nav-link-color"></i> +1 123 456 789</a></li>
                                <li className="cta"><a href="/Contact" className="nav-link-color">За връзка</a></li>

                                {this.state.isLoged ? <li className="cta"><a href="/AdminPage" className="nav-link-color">AdminPage</a></li> : null}

                                {this.state.isLoged ? null : <li className="cta"><a href="/login" className="nav-link-color">Login</a></li>}

                                {this.state.user ? <li className="cta"><a className="nav-link-color">Logged as {this.state.user}</a></li> : null}

                                {this.state.isLoged ? <li className="cta"><a href="/Logout" className="nav-link-color">Logout</a></li> : null}
                                    
                                </ul>
    </div>
  </div>
</nav>
                )
        }

        return (

            <header id="fh5co-header" role="banner">
                <div classNameName="container">
                    <div classNameName="row">
                        <div classNameName="header-inner">
                            <h1><a href="/" id="logo">Онлайн Томбола<span>.</span></a></h1>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <nav role="navigation">
                                <ul>

                                    <li classNameName="cta"><a href="/registercode">Регистриране на бон</a></li>
                                    <li classNameName="call"><a href="tel://123456789"><i classNameName="icon-phone"></i> +1 123 456 789</a></li>
                                    <li classNameName="cta"><a href="contact.html">За връзка</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}