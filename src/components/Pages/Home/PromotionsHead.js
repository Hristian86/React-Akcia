import React from 'react';

const PromotionsHead = (props) => {

    return <div id="fh5co-blog">

        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 text-center fh5co-heading animate-bo" data-animate-effect="fadeIn">
                    <h2>Активни промоции</h2>
                    
                    <div>{props.data ? <p>{props.data[0].tittle}  {props.data[0].promotion_status} </p> : <em>Opps</em>}</div>
                </div>
            </div>
        </div>

    </div>

}

export default PromotionsHead;