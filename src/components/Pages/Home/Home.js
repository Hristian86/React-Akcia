import React, { useState, Component } from 'react';
import './style.css';
import Promotion from './Promotion';
import PromoContainer from './PromoContainer';
import HeaderTextComp from './header-no-promotion-comp/HeaderTextComp';
import PromotionLoader from './PromotionLoader/PromotionLoader';
import GetQuery from '../../QueryService/GetQuery/GetQuery';
import PromotionsHead from './PromotionsHead';

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //promo: true
            loading: true
        }
    }

    componentDidMount() {
        //setTimeout(() => {
        //    this.setState({
        //        promo: true
        //    })
        //}, 700);
        this.getPromos();
    }

    getPromos = async () => {
        const query = new GetQuery();
        const result = await query.getPromotions();
        console.log(await result.error);
        if (await result.error) {
            setTimeout(() => {
                this.setState({
                    loading: false,
                    promo: false,
                    error: result.error
                });
            }, 500);
        } else {
            setTimeout(() => {
                this.setState({
                    loading: false,
                    promo: true,
                    data: result
                });
            }, 500)
        }
    }

    //promoHandler = () => {
    //    this.setState({
    //        promo: !this.state.promo
    //    })
    //}

    render() {

        return (
            <div id="fh5co-page">
                {/*<button className="btn btn-warning" onClick={this.promoHandler}>Test the promotion</button>*/}


                <div className="fh5co-page-title" style={{ 'background': 'url(images/nice-bread.jpg)', 'height': '850px' }} id="mobile-head">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 animate-box">
                                <h1 className="text-left"><span className="colored">Добре дошли в</span> Sweety Cons</h1>
                            </div>

                            <div className="animate-box head-text-seccond" style={{ 'marginTop': '150px' }}>
                                <HeaderTextComp />
                            </div>
                        </div>

                    </div>
                </div>

                {/*<div className="header-no-promotion img-responsive home-image-poster animate-bo">

                    <HeaderTextComp />

                </div>*/}



                <div className="mt-5">

                </div>

                {/*loading the promotion*/}

                {this.state.loading ? <PromotionLoader error={this.state.error ? this.state.error : null} /> : null}

                {this.state.promo ? <PromotionsHead /> : null}

                {this.state.promo ? <div className="fh5co-section-with-image">

                    <img src="images/many-gifts.jpg" alt="" className="img-responsive home-image-poster" />


                    {this.state.promo ? <Promotion /> : null}

                </div> : null}


                {/*promotion container holder*/}
                {this.state.promo ? <PromoContainer /> : null}




            </div>
        )
    }
}