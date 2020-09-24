import React, { Component } from 'react';

export default class PromotionList extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (

            <div className="col-md-4 animate-bo" data-animate-effect="fadeIn">
                <a className="fh5co-entry" href="/RegisterCode" >
                    <figure >
                        <img src="./images/present.jpg" alt="" className="img-responsive" />
                    </figure>
                    <div className="fh5co-copy">
                        <h3 className="margin-main-text" style={{'color':'white'}}>Участвайте</h3>
                        <span className="fh5co-date">в играта</span>
                        <p>Имате шанс да спечелите страхотни награди</p>
                    </div>
                </a>
            </div>


            )
    }
}