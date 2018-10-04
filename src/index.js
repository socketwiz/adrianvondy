
import {HashRouter, Route, Switch} from 'react-router-dom';
import Adrian from './components/adrian';
import AdrianVondy from './components/adrianvondy';
import Directions from './components/directions';
import EstatePlanning from './components/estate-planning';
import Frederick from './components/frederick';
import GuardianShip from './components/guardianship';
import RealEstate from './components/real-estate';
import React from 'react';
import ReactDOM from 'react-dom';
import Catherine from './components/catherine';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={AdrianVondy} />
            <Route exact path="/adrian" component={Adrian} />
            <Route exact path="/directions" component={Directions} />
            <Route exact path="/estate_planning" component={EstatePlanning} />
            <Route exact path="/guardianship" component={GuardianShip} />
            <Route exact path="/frederick" component={Frederick} />
            <Route exact path="/real_estate" component={RealEstate} />
            <Route exact path="/catherine" component={Catherine} />
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);
