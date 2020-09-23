import React from 'react';
import './style.css';

const Footer = () => {

    return <div>



        <footer id="fh5co-footer" role="contentinfo">

            <div className="container">
                <div className="col-md-3 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
                    <h3>
                        <p className="cta"><a href="/Contact" className="nav-link-color">За връзка</a></p>
                    </h3>

                    {/*<p><a href="tel://123456789" className="nav-link-color"><i className="icon-phone nav-link-color"></i> +1 123 456 789</a></p>*/}


                </div>
                <div className="col-md-6 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
                    <h3></h3>
                    <ul className="float">
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                    <ul className="float">
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>

                </div>

                {/*<div className="col-md-2 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
                    <h3>Follow Us</h3>
                    <ul className="fh5co-social">
                        <li><a href="#"><i className="icon-twitter"></i></a></li>
                        <li><a href="#"><i className="icon-facebook"></i></a></li>
                        <li><a href="#"><i className="icon-google-plus"></i></a></li>
                        <li><a href="#"><i className="icon-instagram"></i></a></li>
                    </ul>
                </div>*/}


            </div>
            <p className="text-center">&copy; 2020 </p>
        </footer>


    </div>

}

export default Footer;