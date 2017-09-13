
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AdrianVondy from './components/adrianvondy';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={AdrianVondy} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
