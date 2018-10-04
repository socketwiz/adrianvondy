
import {Link} from 'react-router-dom';
import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    const today = new Date();

    return <div>
      <div className="stripe png_bg"></div>

      <div id="footer_top" className="png_bg"></div>
      <div id="footer" className="png_bg">
        <div className="gs_2 widget">
          <h4 className="widgettitle">Pages</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/directions">Directions</Link></li>
          </ul>
        </div>
        <div className="gs_4 widget">
          <h4 className="widgettitle">Attorneys At Law</h4>

          <ul>
            <li><Link to="/adrian">P. Kay Adrian</Link></li>
            <li><Link to="/frederick">Frederick S. Vondy</Link>
              (also licensed in West Virginia and Maryland)
            </li>
          </ul>
        </div>
        <div className="gs_4 omega widget">
          <h4 className="widgettitle">Office Staff</h4>

          <ul>
            <li><Link to="/catherine">Catherine Marsten</Link> General office support</li>
          </ul>
        </div>
      </div>
      <div id="footer_bottom" className="png_bg">
        <p>Copyrights &copy; <Link to="/">Adrian & Vondy, P.L.C.</Link> {today.getFullYear()}. All rights
          reserved.</p></div>
    </div>;
  }
}
