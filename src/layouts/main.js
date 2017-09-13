
import React, {Component} from 'react';
import Footer from '../components/footer.js';
import Header from '../components/header.js';
import PropTypes from 'prop-types';

export default class Main extends Component {
    render() {
        const {children} = this.props;

        return <div id="container">
            <Header />

            <div className="main png_bg">
                <div className="inner_main">
                    {children}
                </div>
            </div>
            <div className="endmain png_bg"></div>

            <Footer />
        </div>;
    }
}

Main.propTypes = {
    'children': PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ])
};
