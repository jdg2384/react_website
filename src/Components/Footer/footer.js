import React, { Component } from 'react';
import Footer from './footer.css'
import fish from '../../img/fish.svg';

const footer = (props) => {
    return(
        <div>
            <div className="footer">
                <img src={fish} className="fishFooter" /> 
            </div>
        </div>
    );
}

export default footer