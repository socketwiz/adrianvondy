
import {Link} from 'react-router-dom';
import logo from './adrianvondy/images/logo.png';
import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return <div>
            <div id="header">
                <div id="logo"><Link to="/"><img src={logo} alt="Adrian Vondy" /></Link></div>
                <div id="personal_data">
                    <p>Phone <span>(540) 667-8735</span></p>
                    <p>Facsimile <span>(540) 667-8128</span></p>
                </div>
            </div>
            <div id="menu" className="png_bg">
                <ul>
                    <li className="selected"><Link to="/">Home</Link></li>
                    <li><Link to="/directions">Directions</Link></li>
                </ul>
            </div>
        </div>;
    }
}
