import React, { Component } from 'react';
import './style.css';
import Register from './register';
import Winner from '../Winners/Winners';
import setCookie from '../../Cookies/SetCookie';
import getCookie from '../../Cookies/GetCookie';

export default class RegisterCode extends Component {
    constructor(props) {
        super(props)

        this.state = {
            register: 'btn btn-primary with-arrow button-equaling',
            winnerButton: "btn btn-success with-arrow button-equaling",
            regClicked: true,
            header1: "Участвай в",
            header2: " промоцията"
        }
    }

    registerChange = () => {
        const regClick = this.state.regClicked;
        if (regClick === false) {
            this.setState({
                register: 'btn btn-primary with-arrow-clicked button-equaling'
            });
        } else {
            this.setState({
                register: 'btn btn-primary with-arrow button-equaling'
            });
        }
        this.setState({
            regClicked: !regClick,
        })
    }

    componentDidMount() {
        this.winnersCheck();
    }

    winnersCheck = () => {
        const winnersLink = getCookie("winners");
        if (winnersLink === "yes") {
            this.winnersHandle();
            setCookie("winners", null, -1);
        } else {
            this.registerHandle();
            setCookie("winners", null, -1);
        }
    }

    winnersHandle = () => {
        this.setState({
            winners: true,
            header1: "Победители от",
            register: 'btn btn-primary with-arrow button-equaling',
            winnerButton: "btn btn-success with-arrow-clicked button-equaling"
        });
    }

    registerHandle = () => {
        this.setState({
            winners: false,
            header1: "Участвай в",
            register: 'btn btn-primary with-arrow-clicked button-equaling',
            winnerButton: "btn btn-success with-arrow button-equaling"
        });
    }

    render() {

        return (
            <div className="">

                <div className="fh5co-page-title" style={{ 'background': 'url(images/transparent-gifts.png) no-repeat center' }}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 animate-box">
                                <h1 className="text-left"><span className="colored">{this.state.header1}</span>{this.state.header2}</h1>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="fh5co-contact animate-box bakcground-image-register" style={{ 'background': 'url(images/many-gifts.jpg)' }}>
                    <div className="container background-register-form">
                        <div className="row inner-container">
                            <div className="col-md-3">

                                <div id="registerButton">
                                    <h3 className={this.state.register} id="registerButton" onClick={this.registerHandle}>
                                        Регистриране.<i className="icon-arrow-right"></i>
                                    </h3>
                                </div>

                                <hr />

                                <div id="winnersButton">
                                    <h3 className={this.state.winnerButton} onClick={this.winnersHandle}>
                                        Победители.<i className="icon-arrow-right"></i>
                                    </h3>
                                </div>


                                <hr />

                                <div id="conditionsButton">
                                    <a className="conditions-style-button" target="_blank" href="https://drive.google.com/file/d/0B2P0uSvJQPtYazdDY2RrUV9OWmM/view?usp=sharing"><h3 className="btn btn-warning with-arrow button-equaling" >
                                        Условия.<i className="icon-arrow-right"></i>
                                    </h3></a>
                                </div>

                                <hr />
                            </div>

                            {this.state.winners ? <Winner /> : <div className="col-md-8 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">


                                <div id="displayResultsId"></div>


                                <div id="registerCodeId">
                                    <div className="row pl-lg-5">

                                        <div className="col-lg-6 register-banner">

                                            <div className="pl-lg-5 pr-lg-5 pt-lg-5 pb-lg-5 mt-lg-5 mb-lg-5 register-banner-info">
                                                <h3>
                                                    Регистрирайте се за страхотни награди
                                            </h3>
                                                <h5>Купи продукти и имаш възможност да спечелиш награди за активен начин на живот - гривни Active Fit, безжични слушалки Twist, ваучери за велосипед и ваучери за пазаруване.</h5>

                                            </div>

                                        </div>

                                        <div className="col-lg-6 picture-mobile">
                                            <div className="pl-lg-5 pr-lg-5 pt-lg-5 pb-lg-5 mt-lg-5 mb-lg-5 register-banner-info" style={{ 'background': 'url(images/present.jpg)' }}>

                                            </div>
                                        </div>

                                    </div>

                                    <Register />


                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}