import React from 'react';
import ReactDOM from 'react-dom';

const { default: Main } = require('./components/Main');

require('./bootstrap');

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
