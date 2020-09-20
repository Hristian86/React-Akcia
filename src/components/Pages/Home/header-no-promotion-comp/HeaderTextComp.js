import React, { Component } from 'react';
import './style.css';

export default class HeaderTextComp extends Component{

    render() {
        return (
            <div className="color-change-head">
                <div className="container">
                    <h1 className="text-right" style={{ 'color': 'white', 'marginBottom': '10px', 'paddingTop': '30px' }}>Предлагаме Ви<br/> богато разнообразие от<br/> пшенични, диетични, ръжени, типови и пълнозърнести<br/> хлябове и франзели</h1>

                    <img className="text-rights" style={{ 'width':'220px'}} src="https://corporate.target.com/_media/TargetCorp/news/2019/07/Clean%20beauty/ABV_TargetCleanBeauty_header.jpg" />

                    {/*<h3 style={{ 'color': 'white', 'padding-bottom': '20px', 'backgroundColor': 'transparent' }}>asdasd</h3>*/}

                </div>
            </div>
            )
    }
}