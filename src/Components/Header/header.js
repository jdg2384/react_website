import React, { Component } from 'react';
import Header from './header.css'
import hat from '../../img/hat.svg';

const header = (props) => {
    return(
        <div>
            <header className="header">
                <img src={hat} className="headerHat" />
            </header>
        </div>
    );
}

export default header