import React from 'react';

const PromotionLoader = (props) => {

    return <div id="fh5co-blog">

        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 text-center fh5co-heading animate-bo" data-animate-effect="fadeIn">
                    <h2 className="margin-main-text">Проверка за активни промоции</h2>
                    {props.error ? <h3 className="margin-main-text">{props.error}</h3> : <img src="/images/loader.gif" />}
                    <p></p>
                </div>
            </div>
        </div>

    </div>

}

export default PromotionLoader;