import React, { Component } from 'react';

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div>


                <div className="fh5co-page-title text-left" style={{ 'background': 'url(images/email2.png) no-repeat center' }}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 animate-box">
                                <h1><span className="colored">За</span> връзка</h1>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="fh5co-contact animate-box">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <h3>За връзка.</h3>
                                <ul className="contact-info">
                                    <li><i className="icon-map"></i>София</li>
                                   
                                    <li><i className="icon-envelope"></i><a href="#">sweety.cons@mail.bg</a></li>
                                    <li><i className="icon-globe"></i><a href="#">www.yoursite.com</a></li>
                                </ul>
                            </div>
                            <div className="col-md-8 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">

                                <form id="email-form" onsubmit="return false" className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Name" id="name" name="name" type="text" /><span className="text-danger" id="nameError"></span>
                                    </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Email" id="email" name="email" type="text" /><span className="text-danger" id="emailError"></span>
                                    </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input className="form-control" placeholder="Subject" id="subject" name="subject" type="text" /><span className="text-danger" id="subjectError"></span>
                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea name="content" className="form-control" id="content" cols="30" rows="7" placeholder="Message"></textarea><span className="text-danger" id="messageError"></span>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group" id="sendMailButton">
                                                        <input value="Send Message" className="btn btn-primary" onclick="validate()" type="submit" />
                                    </div>
                                                    </div>
                            </form>

                                            </div>
                                        </div>
                                    </div>
            </div>

                                <div id="map" className="animate-box" data-animate-effect="fadeIn"></div>


            </div>
            )
    }
}