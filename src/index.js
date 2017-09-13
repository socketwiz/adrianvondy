
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Adrian from './components/adrian';
import AdrianVondy from './components/adrianvondy';
import Annette from './components/annette';
import Bankruptcy from './components/bankruptcy';
import Directions from './components/directions';
import EstatePlanning from './components/estate-planning';
import Frederick from './components/frederick';
import GuardianShip from './components/guardianship';
import RealEstate from './components/real-estate';
import React from 'react';
import ReactDOM from 'react-dom';
import Tiffany from './components/tiffany';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={AdrianVondy} />
            <Route exact path="/adrian" component={Adrian} />
            <Route exact path="/annette" component={Annette} />
            <Route exact path="/bankruptcy" component={Bankruptcy} />
            <Route exact path="/directions" component={Directions} />
            <Route exact path="/estate_planning" component={EstatePlanning} />
            <Route exact path="/guardianship" component={GuardianShip} />
            <Route exact path="/frederick" component={Frederick} />
            <Route exact path="/real_estate" component={RealEstate} />
            <Route exact path="/tiffany" component={Tiffany} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
