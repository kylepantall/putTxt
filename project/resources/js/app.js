import React from 'react';
import ReactDOM from 'react-dom';

import Main from './main';
import { useLocation } from 'react-router';

require('./bootstrap');

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
