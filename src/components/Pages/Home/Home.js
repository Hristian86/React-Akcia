import React, { useState, Component } from 'react';
import './style.css';
import Promotion from './Promotion';
import PromoContainer from './PromoContainer';
import HeaderTextComp from './header-no-promotion-comp/HeaderTextComp';

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            promo: true
        }
    }

    promoHandler = () => {
        this.setState({
            promo: !this.state.promo
        })
    }

    render() {


        return (
            <div id="fh5co-page">
                {/*<button className="btn btn-warning" onClick={this.promoHandler}>Test the promotion</button>*/}

                <div className="header-no-promotion img-responsive home-image-poster animate-box">

                    <HeaderTextComp />

                </div>

                <div className="mt-5">
                    
                </div>

                {!this.state.promo ? <div className="fh5co-section-with-image">

                    {/*<img src="images/many-gifts.jpg" alt="" className="img-responsive home-image-poster" />*/}

                    {this.state.promo ? <Promotion /> : null}

                </div> : null}


                {/*promotion container holder*/}
                {this.state.promo ? <PromoContainer /> : null}
                



            </div>
            )
        }
}