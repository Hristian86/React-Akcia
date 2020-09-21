import React, { Component } from 'react';
import './style.css';
import Register from './register';

export default class RegisterCode extends Component {
    constructor(props) {
        super(props)

        this.state = {
            register: 'btn btn-primary with-arrow-clicked button-equaling',
            regClicked: true
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

    render() {

        return (
            <div className="">

                <div className="fh5co-page-title" style={{ 'background': 'url(images/transparent-gifts.png) no-repeat center' }}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 animate-box">
                                <h1 className="text-left"><span className="colored">Участвай в</span> играта</h1>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="fh5co-contact animate-box bakcground-image-register" style={{ 'background': 'url(images/many-gifts.jpg)' }}>
                    <div className="container background-register-form">
                        <div className="row inner-container">
                            <div className="col-md-3">

                                <div id="registerButton">
                                    <h3 className="btn btn-primary with-arrow button-equaling" id="registerButton" >
                                        Регистриране.<i className="icon-arrow-right"></i>
                                    </h3>
                                </div>

                                <hr />

                                <div id="winnersButton">
                                    <h3 className="btn btn-success with-arrow button-equaling" >
                                        Победители.<i className="icon-arrow-right"></i>
                                    </h3>
                                </div>


                                <hr />

                                <div id="conditionsButton">
                                    <h3 className="btn btn-warning with-arrow button-equaling" >
                                        Условия.<i className="icon-arrow-right"></i>
                                    </h3>
                                </div>

                                <hr />
                            </div>

                            <div className="col-md-8 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">


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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}