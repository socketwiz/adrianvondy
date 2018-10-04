
import './adrianvondy.css';
import {Link} from 'react-router-dom';
import Main from '../../layouts/main';
import React from 'react';
import slide1 from './images/slides/slide1.jpg';

export default function AdrianVondy() {
    document.title = 'Adrian & Vondy Law Firm in Winchester, Virginia';

    return (
        <Main>
            <div className="container_alpha slider">
                <div>
                    <img src={slide1} alt="" />
                </div>
            </div>

            <div className="container_omega">
                <div className="gs_3">
                    <h3 className="widgettitle">Communities That We Serve</h3>
                    <p>
                        City of Winchester<br />
                        Frederick County, Virginia <span className="alignright">Stephens City, Middletown</span><br />
                        Clarke County, Virginia <span className="alignright">Berryville</span><br />
                        Shenandoah County, Virginia <span className="alignright">Woodstock, Strasburg</span><br />
                        Warren County, Virginia <span className="alignright">Front Royal</span><br />
                        Page County, Virginia <span className="alignright">Luray</span><br />
                        Rappahannock County, Virginia<br />
                    </p>
                    <p>
                        Jefferson County, West Virginia <span className="alignright">Charles Town</span><br />
                        Berkeley County, West Virginia <span className="alignright">Martinsburg</span><br />
                        Morgan County, West Virginia <span className="alignright">Berkeley Springs</span><br />
                        Hampshire County, West Virginia <span className="alignright">Romney, Augusta</span><br />
                        Hardy County, West Virginia <span className="alignright">Moorefield</span><br />
                    </p>
                </div>
                <div className="gs_3 omega">
                    <h3 className="widgettitle">Our Primary Areas of Practice</h3>
                    <p className="areas_of_practice">
                        <Link to="/estate_planning">Estate Planning, Wills and Trusts</Link>
                    </p>
                    <p className="areas_of_practice">
                        <Link to="/estate_planning">Estate Administration and Probate</Link>
                    </p>
                    <p className="areas_of_practice">
                        <Link to="/real_estate">Real Estate Settlements</Link>
                    </p>
                    <p className="areas_of_practice">
                        <Link to="/guardianship">Guardianships</Link>
                    </p>
                </div>
            </div>
        </Main>
    );
}
