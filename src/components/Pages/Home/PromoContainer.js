import React, { Component } from 'react';
import PromotionList from './PromotionList';

export default class PromoContainer extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (

            <div id="fh5co-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center fh5co-heading animate-bo" data-animate-effect="fadeIn">
                            <h2></h2>
                            <p></p>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">

                        {<PromotionList />}

                    </div>

                </div>

            </div>

            )
    }
}