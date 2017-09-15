/* global it */

import AdrianVondy from './index';
import {MemoryRouter} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders AdrianVondy without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <MemoryRouter>
            <AdrianVondy />
        </MemoryRouter>, div
    );
});
