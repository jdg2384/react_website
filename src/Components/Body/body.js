import React, { Component } from 'react';
//Sticky-bar
import { StickyContainer, Sticky } from 'react-sticky';
import Body from './body.css'
import hat from '../../img/hat.svg';
import me from '../../img/pic.jpg';


const body = (props) => {
    console.log(props.toggle)
    return(
        <div>
            <div className="fluid-container">
                <div className="row">
                
                    <div className={props.toggle ? "col-md-3 text-center blue curve" : "col-md-6 text-center blue curveTwo"}>
                        <img src={hat} className="hat" />
                        <h2 className="marginh">About Me</h2>
                    </div>
                    
                    <div className={props.toggle ? "col-md-9 text-center white curve margin" : "col-md-6 text-center white curveTwo margin"} >
                        <img src={me} className="me" />
                        <h3>Joseph Grounds</h3>
                        <h4 className="text-left">I am a Front-End | Programmer from Carbondale, C0 living in Loveland
                            Artworks and illustrations were my gateway to the creative industry which led to the 
                            foundation of my own studio and to first steps in the digital world.
                        </h4>
                        <h3>Full Stack Developer</h3>
                        <h4 className="text-left">A user-centered mindset and sensitivity for design turned out to be the perfect 
                            fit when collaborating with agencies, clients and brands to develop digital concepts and solve problems together. 
                            This rough framework outlines my process of developing digital experiences:
                        </h4>
                        <h3>Languages | Frameworks | Libraries</h3>
                        <table class="table">
                            <tbody>
                            <tr>
                            
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                            </table>
                        <button onClick={props.click}> toggle </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default body