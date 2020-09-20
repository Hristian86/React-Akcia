import React from 'react';
//import './style.css';
import style from './style.module.css';

const NotFound = () => {

    return <div classNameName={style.notFoundPage}>


        <div className="fh5co-page-title">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 animate-box">
                        <h1 className="text-left"><span className="colored">Това което търсите</span> не беше намерено.</h1>
                    </div>
                </div>
            </div>
        </div>


        <div className="fh5co-contact animate-box">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h3>Error 404 not found.</h3>
                    </div>

                </div>
            </div>
        </div>

    </div>


}

export default NotFound;